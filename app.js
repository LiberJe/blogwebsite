var server=require("./lib/controller/server");
var router=require("./lib/controller/router");
// var proxy=require("./lib/controller/proxy");


server.start(router.route);
console.log("success");