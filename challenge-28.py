#!/usr/bin/python
# -*- coding: utf8 -*-

import Queue
import threading 
from time import sleep

class ThreadSafeTextfile(object):
    def __init__(self, fileName):
        self.file = open(fileName, "w+")
        self.writeQueue = Queue.Queue()

    def __del__(self):
        if self.file is not None:
            self._writeToFile()
            
            self.file.close()
            self.file = None
            
    def _writeToFile(self):
        while True:
            try:
                stringToWrite = self.writeQueue.get_nowait()
                self.file.write(stringToWrite)
                self.writeQueue.task_done()
            except Queue.Empty:
                break

    def write(self, stringToWrite):
        self.writeQueue.put_nowait(stringToWrite)

    def read(self):
        self._writeToFile()
        
        self.file.flush()
        self.file.seek(0)
        return self.file.read()

threadSafeTextfile = ThreadSafeTextfile("multi-write.txt")

def writeToTextFile(threadId):
    sleep(1)
    for i in xrange(10):
        threadSafeTextfile.write("%d: ABCD\n" % threadId)

for i in range(10):
    t = threading.Thread(target=writeToTextFile, args=[i])
    t.daemon = True
    t.start()

sleep(10)

print threadSafeTextfile.read()
