var unsortedList = [
	{foo:4711},
	{foo:17},
	{foo:42},
	{foo:9},
	{foo:512}
];

function sortfunction(first, second){
	if (first.foo < second.foo)
	{
		return 1;
	}
	else if(first.foo === second.foo)
	{
		return 0;
	}
	else
	{
		return -1;
	}
}


unsortedList.sort(sortfunction)
