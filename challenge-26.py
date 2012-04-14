#!/usr/bin/python
# -*- coding: utf8 -*- 

with open('1_3.data.txt', 'r') as f:
    for i, line in enumerate(f):
        value = int(line)
        if (value & (value-1)) == 0: # is power of two
            print "%d True" % (i + 1)
        else:
            print "%d False" % (i + 1)
