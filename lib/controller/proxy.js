var http=require("http");
var proxy=require("http-proxy");

proxy=proxy.createProxyServer({});

proxy.on(function(err,req,res) {
    res.writeHead(500,{"Content-type":"text/plain"})
})

var server=http.createServer(function(req,res){
    var host=req.headers.host;
    switch(host){
        case "www.jelewine.xyz":
            proxy.web(req,res,{target:"http://localhost:8888"});
            break;
        case "jelewine.xyz":
            proxy.web(req,res,{target:"http://localhost:8888"});
            break;
        default:
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end("welcome to my server");
    }
})
console.log("listen on port 80");
server.listen(80);

