function container()
{
	this.id;
	this.label;
	this.containers = [];
	this.leafs = [];
	
	this.addContainer = function(o)
	{
		this.containers.push(o);
	}
	this.addLeaf = function(o)
	{
		this.leafs.push(o);
	}
}
function leaf()
{
	this.id;
	this.label;
}

function parseTable(t)
{
	var tree = {};
	for(var i in t.table1)
	{
		var o = t.table1[i];
		var c = new container();
		c.id = o.id;
		c.label = o.label;
		tree[o.id] = c;
		if(o.parent != null)
		{
			tree[o.parent].addContainer(c);
		}
	}
	for(var i in t.table2)
	{
		var o = t.table2[i];
		var l = new leaf();
		l.id = o.id;
		l.label = o.label;
		if(o.parent != null)
		{
			tree[o.parent].addLeaf(l);
		}
	}
	return JSON.stringify(tree[1], null, '\t');
}