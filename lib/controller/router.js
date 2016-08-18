var fs=require("fs");
var mime=require("mime");
// var db=require("db");
var db=require("db2");
var status=require("login_status");

function route(pathname,query,req,res){
    switch (pathname) {
        case "/":
            staticPageHandler("./static/page/index.html",res);
            break;
        case "/index":
            staticPageHandler("./static/page/index.html",res);
            break;
        case "/archive":
            staticPageHandler("./static/page/archive.html",res);
            break;
        case "/aboutme":
            staticPageHandler("./static/page/aboutme.html",res);
            break;
        
        case "/login":
            staticPageHandler("./static/page/login.html",res);
            break;
        case "/admin":
            status.status.judge();
            if(status.status.switch){
                staticPageHandler("./static/admin/admin.html",res);
            }else{
                staticPageHandler("./static/page/login.html",res);
            }
            break;
        case "/write":
            status.status.judge();
            if(status.status.switch){
                staticPageHandler("./static/admin/write.html",res);
            }else{
                staticPageHandler("./static/page/login.html",res);
            }
            break;
        
        case "/getArticlesList":
            db.queryall(res);
            break;
        case "/delData":
            db.delData(req,res);
            break;
        case "/update":
            db.update(req,res);
            break;
        case "/create":
            db.create(req,res);
            break;
            
        case "/querydata":
            db.querydata(req,res);
            break;
        case "/getPapper":
            db.getPapper(req,res);
            break;
        case "/getCatalog":
            db.getCatalog(res);
            break;
        case "/article":
            db.showpapper(query,req,res);
            break;
        
        case "/loginCheck":
            db.loginCheck(query,req,res);
            break;
        
        case "/getComments":
            db.getComments(req,res);
            break;
        case "/commentPublish":
            db.commentPublish(req,res);
            break;
        case "/leaveMessage":
        db.leaveMessage(req,res);    
        default:
            staticPageHandler(pathname.slice(1),res);
            break;
    }
}

function staticPageHandler(path,res) {
    fs.readFile(path, function (err, data) {
        if (err) {
            return console.error(err);
        }
        res.writeHead(200,{'Content-type':mime.lookup(path)});
        res.end(data,"utf-8");
    });
}


exports.route=route;