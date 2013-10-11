var http = require('http');
var port = process.env.C9_PORT || 1337;
var fs = require('fs');

function run(res)
{
	function bar()
	{
		return "Margie and Charlie 03s";
	}

	fs.readFile('./Data.html', function (err, html) {
		if (err) {
			throw err; 
		}   
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write('<h1>Bar Bar 01</h1>');
		res.write('<p>' + bar() + '</p>');
		res.write(html);
		res.end('<p>Hello HTTP from the JSNode\n</p>');
	});
}

var server = http.createServer(function (req, res) {
	run(res);
});

server.listen(port);
