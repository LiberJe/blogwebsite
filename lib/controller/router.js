var fs=require("fs");
var mime=require("mime");

function route(pathname,res){
    switch (pathname) {
        case "/index":
            staticPageHandler("./static/page/index.html",res);
            break;
        case "/home":
            staticPageHandler("./static/page/home.html",res);
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
        // case "/index":
        //     staticPageHandler("./static/page/index.html",res);
        //     break;
        // case "/index":
        //     staticPageHandler("./static/page/index.html",res);
        //     break;
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