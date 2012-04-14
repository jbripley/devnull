import socket
import sys

import simplejson

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

try:
    # Connect to server and send data
    sock.connect(("localhost", 9999))
    # Receive data from the server and shut down
    received = sock.recv(1024)
finally:
    sock.close()

print simplejson.dumps(simplejson.loads(received), indent=4)
