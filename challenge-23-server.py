#!/usr/bin/python
# -*- coding: utf8 -*- 

import xml.etree.cElementTree as ET
import simplejson
import SocketServer

def elem_to_internal(elem,strip=1):
    """Convert an Element into an internal dictionary (not JSON!)."""

    d = {}
    for key, value in elem.attrib.items():
        d['@'+key] = value

    # loop over subelements to merge them
    for subelem in elem:
        v = elem_to_internal(subelem,strip=strip)
        tag = subelem.tag
        value = v[tag]
        try:
            # add to existing list for this tag
            d[tag].append(value)
        except AttributeError:
            # turn existing entry into a list
            d[tag] = [d[tag], value]
        except KeyError:
            # add a new non-list entry
            d[tag] = value
    text = elem.text
    tail = elem.tail
    if strip:
        # ignore leading and trailing whitespace
        if text: text = text.strip()
        if tail: tail = tail.strip()

    if tail:
        d['#tail'] = tail

    if d:
        # use #text element if other attributes exist
        if text: d["#text"] = text
    else:
        # text is the value if no attributes
        d = text or None
    return {elem.tag: d}

def xml2json(xmlstring,strip=1):
    elem = ET.fromstring(xmlstring)
    if hasattr(elem, 'getroot'):
        elem = elem.getroot()
    return simplejson.dumps(elem_to_internal(elem,strip=strip))

class TCPHandler(SocketServer.BaseRequestHandler):
    def handle(self):
        with open('unicode.xml') as f:
            xmlString = f.read()
            jsonString = xml2json(xmlString)
            self.request.sendall(jsonString)

if __name__ == "__main__":
    server = SocketServer.TCPServer(("localhost", 9999), TCPHandler)
    server.serve_forever()
