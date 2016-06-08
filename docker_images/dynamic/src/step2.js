var Chance = require('chance');
var chance = new Chance();
var express = require('express');
var srv = express();

srv.get('/',function(req,res)
{
	//res.send("Welcome on this dynamic site!");
	res.send(surprise());
});

//srv.get('/surprise', function(req, res)
//{
	//res.send(surprise());
//});

srv.listen(3000, function()
{
		console.log("Listening port 3000");
});

function surprise()
{
	var nbString = chance.integer({min: 3, max: 8});
	
	var strings = [];
	
	for(var i = 0; i < nbString; i++)
	{
		strings.push(chance.sentence({word: 10}));
	}
	return strings;
}

