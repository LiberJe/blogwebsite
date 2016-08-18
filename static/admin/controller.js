myadmin.controller("ctrl",["$scope","catalog","showState",function($scope,catalog,showState){
    $scope.list=catalog.list;
    $scope.state=showState;

}])

myadmin.controller("adminctrl",["$scope","sArticle","queryall","catalog",function($scope,sArticle,queryall,catalog){
    $scope.citem="文章管理";
    
    // listdata.promise.then(function(data){
    //     $scope.listdata=listdata.group;
    // })
    
    queryall.getdata();
    // queryall.promise.then(function(data){
    //     $scope.listdata=queryall;
    // })
    $scope.listdata=queryall;
    
    $scope.selectArticle=function(item){
        console.log(item)
        sArticle.id=item.id;
        sArticle.date=item.date;
        sArticle.title=item.title;
        sArticle.content=item.content;
    }
    
}])

myadmin.controller("modifyctrl",["$scope","queryall","updateData","sArticle",function($scope,queryall,updateData,sArticle){
    $scope.sart=sArticle;

    $scope.cons=function() {
        updateData.update($scope.sart.id,$scope.sart.title,$scope.sart.date,$scope.sart.content);
        updateData.promise.then(function(data) {
            if(updateData.check){
                queryall.getdata();
                alert("修改成功");
            }else{
                alert("修改失败")
            }
        })
    }
}])

myadmin.controller("delctrl",["$scope","sArticle","queryall","deleteData",function($scope,sArticle,queryall,deleteData){
    
    $scope.del=function(){
        deleteData.del(sArticle.id);
        deleteData.promise.then(function(data){
            if(deleteData.check){
                queryall.getdata();
                alert("删除成功");
            }else{
                alert("删除失败");
            }
        })
    }
}])

//writectrl
myadmin.controller("writectrl",["$scope","create","initdate",function($scope,create,initdate){
    
    $scope.save=function() {
        
        var date="";
        if(!$scope.date){
            initdate.init();
            date=initdate.date;
        }else{
            date=$scope.date;
        }
        

        create.create($scope.content,$scope.title,date);
        create.promise.then(function(data) {
            console.log(data);
            if(create.check){
                location.href="index";
            }
        })
    }
}])