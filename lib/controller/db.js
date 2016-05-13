var mongoose=require("mongoose");
console.log("mongodb")

// function test(){
//     var db=mongoose.connect("mongodb://localhost/articles");

//     db.on("error",function(){
//         console.error("connection error");
//     })

//     db.once("open",function(){
//         console.log("db has connected");
//         var articlesSchema=mongoose.Schema({
//             id:"",
//             title:"",
//             author:"",
//             type:"",
//             date:"",
//             content:"",
//             description:""
//         })

//         var articles=mongoose.model("articles",articlesSchema);
        
//         var newarticle=new articles({
//             id:0,
//             title:"work together",
//             author:"lewine",
//             type:"translate",
//             date:"2016-05-13",
//             content:"just a joke",
//             description:"get it"
//         })
//         newarticle.save(function(err,data){
//             if(err)console.error(err);
//             console.log(data);
//         })
//     })
// }

var db=mongoose.connect("mongodb://localhost/articles");

db.on("error",function(){
    console.error("connection error");
})

db.once("open",function(){
    console.log("db has connected");
    var articlesSchema=mongoose.Schema({
        id:"",
        title:"",
        author:"",
        type:"",
        date:"",
        content:"",
        description:""
    })

    var articles=mongoose.model("articles",articlesSchema);
    
    var newarticle=new articles({
        id:0,
        title:"work together",
        author:"lewine",
        type:"translate",
        date:"2016-05-13",
        content:"just a joke",
        description:"get it"
    })
    newarticle.save(function(err,data){
        if(err)console.error(err);
        console.log(data);
    })
})

exports.db=test;