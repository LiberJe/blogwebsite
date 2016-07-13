$(document).ready(function(){
    
    //创建最新文章
    var papperList=new CreatePapperList();
    
})


function CreatePapperList(){

    var that=this;
    var count="2";

    $.ajax({
        url:"getPapper",
        method:"POST",
        data:count,
        success:function(data){
            console.log(data);
            createPapper(data);
        }
    })
    
    function createPapper(data){
        $.each(data,function(index,data){
            var description=intercept(data.content,150);
            $("<div class='article article"+data.id+"'><h2><a href='article?id="+data.id+"'>"+data.title+"</a></h2><h4 class='date'>"+data.date+"</h4><p>"+marked(description+'......')+"<p><div><hr>").appendTo($(".content"));
        })    
    }

    function intercept(article,len){
        var newstr=article.substring(0,len);
        return newstr;
    }
    
}

