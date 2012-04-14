#!/usr/bin/python
from operator import itemgetter

unsortedList = [
	{"foo":4711},
	{"foo":17},
	{"foo":42},
	{"foo":9},
	{"foo":512}
]


sortedList = sorted(unsortedList, key=itemgetter('foo'), reverse=True) 

print sortedList