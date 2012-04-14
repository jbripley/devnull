formData1 =
[
	{"name": "Name", "type": "text" },
	{"name": "Fave books", "type": "list", "list":
		[
			{"name": "Best book", "type": "text" },
			{"name": "Next best book", "type": "text" }
		]
	},
	{"name": "Awake", "type": "radio", "values": ["yes", "no"] }
]

formData2 =
[
	{"name": "Date", "type": "date" },
	{"name": "Emergencies", "type": "list", "list":
		[
			{"name": "Out of games", "type": "radio", "values": ["yes", "no"] },
			{"name": "Out of beer", "type": "radio", "values": ["wait", "what"] }	
		]
	}
]