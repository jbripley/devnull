function quirky(cb, input)
{
	setTimeout(function()
	{
		cb(input)
	}, Math.random()*100);
}

function caller(cb)
{
	var quirkysDone = [];
	var quirkyDone = function(i)
	{
		console.log("quirky done: " + i);
		quirkysDone.push(i);
		if (quirkysDone.length == 10)
		{
			cb();
		}
	};
	
	for(var i=0;i < 10;i++)
	{
		quirky(quirkyDone, i);
	}
}

print caller(function() { console.log("done"); })