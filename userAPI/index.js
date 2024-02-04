var http = require("http");

var fs = require("fs");

http.createServer(function(req,res)
{
    const data = fs.readFileSync(`${__dirname}/userapi.json`,"utf-8");
    const objData = JSON.parse(data);

    if(req.url=="/"){
        res.end("hello this is home page");
    }
    else if(req.url=="/about"){
        res.end("hello this about page");
    }
    else if(req.url=="/contact"){
        res.end("hello this is contact page");
    }

    else if(req.url=="/userapi")
    {
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(objData[2].url);
    }

    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 error page</h1>");
    }
    
}).listen(5000);