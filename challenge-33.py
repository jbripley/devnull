#!/usr/bin/python
# -*- coding: utf8 -*-

startMatchRowStart = 100101
startMatchRow = 100101
with open('2_8.data.txt', 'r') as f:
    for i, line in enumerate(f):
        if i == startMatchRow:
            startMatchRow += 100101
            print "row: %s" % line
