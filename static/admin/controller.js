myadmin.controller("adminctrl",["$scope","md","sArticle","queryall",function($scope,md,sArticle,queryall){
    $scope.list=["文章管理","新文章"];
    $scope.citem="文章管理";
    
    // listdata.promise.then(function(data){
    //     $scope.listdata=listdata.group;
    // })
    
    queryall.getdata();
    queryall.promise.then(function(data){
        $scope.listdata=queryall.group;
    })
    
    $scope.selectArticle=function(index){
        md.init();
        sArticle.id=index;
    }
    
}])

myadmin.controller("modifyctrl",["$scope","queryall","md","sArticle",function($scope,queryall,md,sArticle){
    $scope.sart=sArticle;
    $scope.listdata=queryall;
    $scope.selectlist=["编程","杂谈","翻译"];
    
    $scope.newpappertype="编程";
    
    $scope.postval=function(){
        $scope.newpapperval=md.getval();
    }
    
    $scope.cons=function() {
        console.log($scope.artval);
        console.log($scope.listdata.group[$scope.sart.id].content)
    }
}])

myadmin.controller("delctrl",["$scope","sArticle","queryall","deleteData",function($scope,sArticle,queryall,deleteData){
    
    $scope.del=function(){
        deleteData.del(sArticle.id);
    }
}])