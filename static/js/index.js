$(document).ready(function(){
    //fullpage
    // $("#fullpage").fullpage();
    
    //创建最新文章
    var latestPapper=new CreateLatestPapper();
    
    //创建其他文章
    querydata(3,createOtherPapper);
})


function CreateLatestPapper(){
    this.title="";
    this.date="";
    this.type="";
    this.description="";
    this.content="";
    var that=this;
    
    $.ajax({
        url:"getLatest",
        method:"POST",
        success:function(data){
            that.title=data.title;
            that.date=data.date;
            that.type=data.type;
            that.description=data.description;
            that.content=data.content;
            console.log(data);
            
            createpapper(data.title,data.date,data.type,data.description,data.content);
        }
    })
    
    function createpapper(title,date,type,description,content){
        console.log(title)
        $("<div class='page-header'><span class='label label-danger'>最新文章</span><h1>"+title+"</h1><ol class='breadcrumb'><li>"+type+"</li><li>"+date+"</li></ol></div>").appendTo($(".indexpapper .panel-body"));
        $("<p data-toggle='collapse' data-target='#pappercon'>"+description+"<span class='more'>&nbsp&gt&gt点击查看全文</span></p>").appendTo($(".indexpapper .panel-body"));
        $("<hr/>").appendTo($(".indexpapper .panel-body"));
        $("<p class='collapse' id='pappercon'>"+content+"</p>").appendTo($(".indexpapper .panel-body"));
    }
    
    function creatcomment(){
        
    }
}

function createOtherPapper(data){
    console.log(data);
    $.each(data,function(index,cdata){
        console.log(index);
        $("<li class='list-group-item roll-papper-head'><a href='papper?id="+cdata.id+"'>"+cdata.title+"</a></li>").appendTo($(".otherpapper"));
        
    })
}