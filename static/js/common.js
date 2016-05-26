

function getArticle(){
    var articleList;
    $.ajax({
        url:"getArticlesList",
        async:false,
        success:function(data){
            articleList= data;
        }
    })
    return articleList;
}


//nav跳转
function navjump(dom,target){
    $(dom).click(function(){
        window.location.href=target;
    })
}

function querydata(number,callback){
    $.ajax({
        url:"querydata",
        method:"POST",
        data:number,
        success:callback
    })
}


