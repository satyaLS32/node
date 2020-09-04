var http = require('http')

var server = http.createServer(function(req,res){
    res.write("<h1> this is node.js application</h1>");
    res.end();
})

server.listen(5600)