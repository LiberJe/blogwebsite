myadmin.service("listdata",["$http","$q",function($http,$q){
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

myadmin.service("md",[function(){
    this.editor=new Editor();
    var that=this;
    this.init=function(){
        that.editor.render();
    }
    this.getval=function(){
        return that.editor.codemirror.getValue();
    }
}])

myadmin.service("sArticle",[function(){
    this.id=0;
}])