myadmin.directive("newarticle",[function(md){
    return{
        restrict:"A",
        link:function(scope,element,attr){
            element.click(function(){
                if(element.text()=="新文章"){
                    location.href="write";
                }
            })
        }
    }
}])

write.directive("newarticle",[function(md){
    return{
        restrict:"A",
        link:function(scope,element,attr){
            element.click(function(){
                if(element.text()=="文章管理"){
                    location.href="admin";
                }
            })
        }
    }
}])