myadmin.controller("adminctrl",["$scope","md","sArticle","queryall",function($scope,md,sArticle,queryall){
    $scope.list=["文章管理","新文章"];
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
        md.init();
        sArticle.id=item.id;
    }
    
}])

myadmin.controller("modifyctrl",["$scope","queryall","updateData","md","sArticle",function($scope,queryall,updateData,md,sArticle){
    $scope.sart=sArticle;
    $scope.listdata=queryall;
    $scope.selectlist=["编程","杂谈","翻译"];
    
    $scope.newpappertype="编程";
    
    $scope.postval=function(){
        $scope.newpapperval=md.getval();
    }
    
    $scope.cons=function() {
        $scope.postval();
        updateData.update($scope.sart.id,$scope.newpapperval,$scope.newpappertype);
        updateData.promise.then(function(data) {
            if(updateData.check){
                queryall.getdata();
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
            }
        })
    }
}])

//writectrl
write.controller("writectrl",["$scope","md","create","initdate",function($scope,md,create,initdate){
    $scope.list=["文章管理","新文章"];
    $scope.citem="文章管理";
    
    
    $scope.selectlist=["编程","杂谈","翻译"];    
    $scope.type="编程";
    
    $scope.init=function(){
        md.init();
    }
    
    $scope.save=function() {
        var val=md.getval();
        initdate.init();
        
        create.create(val,$scope.type,$scope.title,$scope.description,$scope.date);
        create.promise.then(function(data) {
            if(create.check){
                location.href="";
            }
        })
    }
}])