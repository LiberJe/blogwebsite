$(document).ready(function(){
    var la=new CreateLatestArticle();
  
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

function CreateLatestArticle(){
    this.latestArticle=getArticle()[0];
    $("<p><span>最新内容</span>&nbsp&nbsp&nbsp"+this.latestArticle.date+"&nbsp&nbsp&nbsp<a href='#'>"+this.latestArticle.title+"</a></p>").appendTo($(".footer div"));
}