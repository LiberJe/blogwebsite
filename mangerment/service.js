myapp.service("listdata",["$http","$q",function($http,$q){
    this.group=[];
    var that=this;
    var deffer=$q.defer();
    $http.get("../test.json").success(function(data){
        that.group=data;
        deffer.resolve(data);
    }).error(function(){
        alert("获取数据失败，请稍后");
    })
    this.promise=deffer.promise;
}])