var unsortedList = [
	{foo:4711},
	{foo:17},
	{foo:42},
	{foo:9},
	{foo:512}
];

function sortfunction(first, second){
	return (second.foo - first.foo);
}


unsortedList.sort(sortfunction)