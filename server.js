var http = require('http');

var app = http.createServer();

app.on('request', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write("Hello World");
	res.end();
})

var port = 9011
app.listen(port, function() {
	console.log("My instructions make me listen on port: " + port);
});