$(document).ready(function(){
    
    //创建最新文章
    var papperList=new CreatePapperList();
    
    // 留言框
    transformMessage();
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

function transformMessage(){
    var flag=0;
    $("#message p").click(function(){
        if(!flag){
            showMessage();
        }else{
            hideMessage();
        }
    })

    $(".message-send").click(function(e){
        e.stopPropagation();
        var messageData={};
        messageData.email=$(".message-email").val();
        messageData.txt=$(".message-txt").val();
        console.log(messageData);
        $.ajax({
            url:"leaveMessage",
            method:"POST",
            data:JSON.stringify(messageData),
            success:function(data){
                toastr.success("发布成功");
                $(".message-email").val("");
                $(".message-txt").val("");
                hideMessage();
            }
        })
    })

    function showMessage(){
        $("#message").css({
            "width":"300px",
            "height":"200px",
            "border-radius":"0",
            "bottom":"0px",
            "right":"40px",
            "border-top-left-radius":"3px",
            "border-top-right-radius":"3px",
            "background-color":"#E7E7E7"
        })
        $(".message-title").css({
            "display":"inline"
        })
        $(".message-send").show(500);
        $(".message-box").fadeIn(500);

        flag=1;
    }

    function hideMessage(){
        $("#message").css({
            "width":"50px",
            "height":"50px",
            "border-radius":"50%",
            "bottom":"80px",
            "right":"80px",
            "background-color":"#CCFF66"
        })
        $(".message-title,.message-send").css({
            "display":"none"
        })
        $(".message-box").css({
            "display":"none"
        })

        flag=0;
    }
}
