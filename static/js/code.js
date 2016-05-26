$(document).ready(function(){
    var articlePanel=new CreateArticlePanel();
    
    
})

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
    this.type=articleData.type;
    this.date=articleData.date;
    this.content=articleData.content;
    this.description=articleData.description;
    
    $("<div class='panel panel-default'><div class='panel-body papper-panel'></div></div>").appendTo($(".article .con-left"));
    // $("<div class='media'><div class='media-left'></div><div class='media-body'></div></div>").appendTo($(".article .con-left .panel-body:last"));
    
    $("<a href='papper'><div class='article-header'><h4>"+this.title+"</h4></div></a>").appendTo($(".article .papper-panel:last"));
    $("<ol class='article-bread breadcrumb'><li>"+this.type+"</li><li>"+this.date+"</li></ol>").appendTo($(".article .papper-panel:last"));
    $("<div class='article-description'>"+this.description+"</div>").appendTo($(".article .papper-panel:last"));
}