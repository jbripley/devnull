function reverse(s)
{
	var letters = [];
	console.log(s);
	var middle_char = Math.ceil(s.length / 2);
	
	for (var i = 1; i <= s.length; i++)
	{
		if(i == middle_char)
		{
			continue;
		}
	    letters[i] = s.substring((i - 1), i);
	}
	
	letters.reverse();	
	console.log(letters.join(''));
	return letters.join('');
}

alert(reverse('abcde'));
alert(reverse('abcd'));