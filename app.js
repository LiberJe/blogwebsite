var server=require("./lib/controller/server");
var router=require("./lib/controller/router");
var db=require("./lib/controller/db");

server.start(router.route);
console.log("success");
db();