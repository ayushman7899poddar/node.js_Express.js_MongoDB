var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    var filename = "." + q.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            // res.writeHead(404,{'content-Type':text/html});
            return res.end("404 Not Found");
        }
        // res.writeHead(200,{"content-Type":"text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8000);

http.createServer(function(req,res){
    if(req.url=="/")
    {
        res.end("hello this is home page");
    }
    else if(req.url=="/about"){
        res.end("hello this about page");
    }
    else if(req.url=="/contact"){
        res.end("hello this is contact page");
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 error page</h1>");
    }
}).listen(8000);