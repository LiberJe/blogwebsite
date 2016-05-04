
myapp.controller("mycontroller",["$scope","listdata",function($scope,listdata){
    $scope.list=["文章管理","新文章"];
    $scope.citem="文章管理";
    
    listdata.promise.then(function(data){
        $scope.listdata=listdata.group;
    })
    
    $scope.changeitem=function(index) {
        $scope.citem=$scope.list[index];
    }
}])

