myadmin.controller("adminctrl",["$scope","listdata","md","sArticle",function($scope,listdata,md,sArticle){
    $scope.list=["文章管理","新文章"];
    $scope.citem="文章管理";
    
    listdata.promise.then(function(data){
        $scope.listdata=listdata.group;
    })
    
    $scope.selectArticle=function(index){
        md.init();
        sArticle.id=index;
    }
    
}])

myadmin.controller("modifyctrl",["$scope","listdata","md","sArticle",function($scope,listdata,md,sArticle){
    $scope.sart=sArticle;
    $scope.listdata=listdata;
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