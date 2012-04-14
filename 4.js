function parseObjectToForm(o, dom)
{
	var form = document.createElement('form')
	var fc = new formCreator();
	for(var i in o)
	{
		form.appendChild(fc.createField(o[i]));
	}
	dom.appendChild(form);
}

var formCreator = function()
{
	this.createField = function(o)
	{
		var div = document.createElement('div');
		var e;
		if(o.type == 'text')
		{
			div.appendChild(this.createLabel(o.name));
			e = document.createElement('input');
			e.type = 'text';
		}
		else if(o.type == 'radio')
		{
			div.appendChild(this.createP(o));
			e = document.createElement('div');
			for(var i in o.values)
			{
				var value = o.values[i];
				e.appendChild(this.createLabel(value));
				var r = document.createElement('input');
				r.type = 'radio';
				r.name = o.name.toLowerCase();
				e.appendChild(r);
			}
		}
		else if(o.type == 'list')
		{
			div.appendChild(this.createP(o));
			var e = document.createElement('ul');
			for(var i in o.list)
			{
				var list_element = document.createElement('li');
				list_element.appendChild(this.createField(o.list[i]));
				e.appendChild(list_element);
			}
			div.appendChild(e);
		}
		else if(o.type == 'date')
		{
			console.log(o);
			div.appendChild(this.createLabel(o.name));
			e = document.createElement('input');
			e.type = 'date';
		}
		e.id = o.name.toLowerCase();
		div.appendChild(e);
		return div;
	}
	
	this.createLabel = function(o)
	{
		var l = document.createElement('label');
		l.innerHTML = o;
		l.htmlFor = o.toLowerCase();
		return l;
	}
	
	this.createP = function(o)
	{
		var p = document.createElement('p');
		p.innerHTML = o.name;
		return p;
	}
}