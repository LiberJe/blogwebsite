var mysql =require("mysql");
var qs=require("querystring");

//data connection
var connection=mysql.createConnection({
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    password:"root",
    database:"website"
})

connection.connect(function(err) {
    if(err){
        console.error(err);
    }
    console.log("adminuser connection succed");
})


//session
var sessions={};
var key="session_id";
var EXPIRES=20*60*1000;

function genearate() {
    var session={};
    session.id=(new Date()).getTime()+Math.random();
    session.cookie={
        expires:(new Date()).getTime()+EXPIRES
    }
    sessions[session.id]=session;
    return session;
}

//登陆验证
function loginCheck(query,req,res){
    var condition="SELECT * FROM user";
    var postdata="";
    req.on("data",function (chunk) {
        postdata+=chunk;
    })
    req.on("end",function(){
        
        connection.query(condition,function(err,data) {
            if(err){
                console.error(err);
            }else{
                postdata=qs.parse(postdata);
                if(postdata.username==data[0].username && postdata.password==data[0].password){
                    var asession=genearate();
                    // console.log(asession);

                    var Cookies = {};
                    req.headers.cookie && req.headers.cookie.split(';').forEach(function( Cookie ) {
                        var parts = Cookie.split('=');
                        Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
                    });
                    console.log(Cookies.session);
                    // var cookies=res.getHeader("Set-Cookie");
                    // var session=serialize(mysession.key,req.session.id);
                    // cookies=Array.isArray(cookies)?cookies.concat(session):[cookies,session];
                    // console.log(cookies);

                    res.writeHead(200,{
                        'Set-Cookie': ["session="+asession.id],
                        'Content-Type': 'text/plain'});
                    res.end("true","utf-8");
                }
            }
        })
    })
}

exports.sessions=sessions;
exports.loginCheck=loginCheck;