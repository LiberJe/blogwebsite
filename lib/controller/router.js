var fs=require("fs");
var mime=require("mime");
var db=require("db");
// var db=require("db2");

function route(pathname,req,res){
    switch (pathname) {
        case "/index":
            staticPageHandler("./static/page/index.html",res);
            break;
        case "/aboutme":
            staticPageHandler("./static/page/aboutme.html",res);
            break;
        case "/code":
            staticPageHandler("./static/page/code.html",res);
            break;
        // case "/talk":
        //     staticPageHandler("./static/page/talk.html",res);
        //     break;
        // case "/translate":
        //     staticPageHandler("./static/page/translate.html",res);
        //     break;
        
        case "/admin":
            staticPageHandler("./static/admin/admin.html",res);
            break;
        case "/write":
            staticPageHandler("./static/admin/write.html",res);
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
            
        case "/getLatest":
            db.getLatest(res);
            break;
            
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