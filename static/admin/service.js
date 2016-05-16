myadmin.service("listdata",["$http","$q",function($http,$q){
    this.group=[];
    var that=this;
    var deffer=$q.defer();
    $http.get("getArticlesList").success(function(data){
        // console.log(data);
        that.group=data;
        deffer.resolve(data);
    }).error(function(){
        alert("获取数据失败，请稍后");
    })
    this.promise=deffer.promise;
}])

myadmin.service("queryall",["$http","$q",function($http,$q){
    this.group=[];
    var that=this;
    this.getdata=function() {
        var deffer=$q.defer();
        $http.get("getArticlesList").success(function(data){
            console.log(data);
            that.group=data;
            deffer.resolve(data);
        })
        that.promise=deffer.promise;
    }
    
}])

myadmin.service("deleteData",["$http","$q",function($http,$q){
    this.check=false;
    var that=this;
    this.del=function(id) {
        var deffer=$q.defer();
        $http({
            url:"delData",
            method:"POST",
            data:{
                "id":id
            }
        }).success(function(data){
            console.log(data);
            that.check=data.check;
            deffer.resolve(data);
        })
        that.promise=deffer.promise;
    }
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