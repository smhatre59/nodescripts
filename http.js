var http = require('http')
var importjson = require('./exportjson')

//http server code
http.createServer(function(req,rep){
rep.writeHead(200,{'Content-Type':'text/plain'})
rep.end(importjson.name)
}).listen(8080,'127.0.0.1')
console.log("server running at 127.0.0.1:8080")


//dns code
var dns =require('dns')
dns.resolve4('www.google.com',function(err,addresses){

	if(err)
	{
		console.log('error occurred',err)
	    // throw err/*will cause node server to stop if network connectivity is lost*/ 
	}
	
	console.log('addresses'+ JSON.stringify(addresses))

});

//memory usage
var EventEmitter = require('events').EventEmitter
var emitter = new EventEmitter;

setInterval(function(){
	console.log(process.memoryUsage().rss);
},3000)