myadmin.controller("mycontroller",["$scope","listdata","md",function($scope,listdata,md){
    $scope.list=["文章管理","新文章"];
    $scope.citem="文章管理";
    $scope.panelbody=true;
    
    
    $scope.newpappertype="编程";
    $scope.newpapperval="";
    
    $scope.selectlist=["编程","杂谈","翻译"];
    
    listdata.promise.then(function(data){
        $scope.listdata=listdata.group;
    })
    
    $scope.changeitem=function(index) {
        $scope.citem=$scope.list[index];
        if(index==0){
            $scope.panelbody=true;
        }else{
            $scope.panelbody=false;
            md.init();
        }
    }
    
    
    $scope.postval=function(){
        $scope.newpapperval=md.getval();
    }
    
}])

