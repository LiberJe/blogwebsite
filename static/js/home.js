$(document).ready(function(){
    var la=new CreateLatestArticle();
    
    togglenav();
})

function getBingPic(){
    $.ajax({
        url:"http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1",
        type:"GET",
        dataType:"jsonp",
        jsonp: "callback",
        success:function(data){
            
        }
    })
}

function getBingTxt(){
    $.ajax({
        url:"http://tu.ihuan.me/api/bing/text",
        type:"GET",
        dataType:"jsonp",
        success:function(data){
            console.log(data);
        }
    })
}

function CreateLatestArticle(){
    this.latestArticle=getArticle()[0];
    $("<p><span>最新内容</span>&nbsp&nbsp&nbsp"+this.latestArticle.date+"&nbsp&nbsp&nbsp<a href='#'>"+this.latestArticle.title+"</a></p>").appendTo($(".footer div"));
}

function togglenav(){
    $("body").click(function(){
        $("nav").fadeOut(500);
    })
    $(document).on("mousewheel DOMMouseScroll", function (e) {
        $("nav").fadeIn(500);
    });
}
