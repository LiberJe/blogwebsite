//获取文章
function CreateArticlePanel(){
    this.getArticleListData=getArticle();
    this.articleList=[];
    var that=this;
    
    $.each(this.getArticleListData,function(index,articleData){
        var naData=new CreateArticle(articleData);
        that.articleList.push(naData);
    })
}

function CreateArticle(articleData){
    this.title=articleData.title;
    this.id=articleData.id;
    this.author=articleData.author;
    this.type=articleData.type;
    this.date=articleData.date;
    this.content=articleData.content;
    this.img=articleData.img;
    this.description=articleData.description;
    
    $("<div class='panel panel-default'><div class='panel-body'></div></div>").appendTo($(".article .con-left"));
    $("<div class='media'><div class='media-left'></div><div class='media-body'></div></div>").appendTo($(".article .con-left .panel-body:last"));
    $("<a href='#'><img src=../"+this.img+" width='100px' height='100px' /></a>").appendTo($(".article .con-left .media-left:last"))
    $("<div class='article-header'><h4>"+this.title+"</h4></div>").appendTo($(".article .con-left .media-body:last"));
    $("<ol class='article-bread breadcrumb'><li>"+this.type+"</li><li>"+this.date+"</li></ol>").appendTo($(".article .con-left .media-body:last"));
    $("<div class='article-description'>"+this.description+"</div>").appendTo($(".article .con-left .media-body:last"));
}

function getArticle(){
    var articleList;
    $.ajax({
        url:"../test.json",
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
