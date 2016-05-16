var server=require("./lib/controller/server");
var router=require("./lib/controller/router");


server.start(router.route);
console.log("success");