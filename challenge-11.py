#!/usr/bin/python
# -*- coding: utf8 -*- 

def output_xml(data):
    return "output_xml with data: %r" % data

def output(data, format="xml"):
    formatFunctionName = 'output_%s' % format
    # exec 'def %s(data): return "called %s"' % (formatFunctionName, formatFunctionName)
    
    if formatFunctionName in globals():
        return globals()[formatFunctionName](data)
    else:
        return "No such function: %s" % formatFunctionName
    
print output("abcd", "xml")
