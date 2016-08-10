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
            
            // for(var i=0;i<data.length;i++){
            //     if(!data[i].date){
            //         var post=data[i].date.indexOf("T");
            //         var date=data[i].date.substring(0,post);
            //         data[i].date=date;
            //     }
            // }
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

myadmin.service("updateData",["$http","$q",function($http,$q){
    this.check=false;
    var that=this;
    this.update=function(id,title,content,type) {
        var deffer=$q.defer();
        console.log("connecting")
        $http({
            url:"update",
            method:"POST",
            data:{
                "id":id,
                "title":title,
                "content":content,
                "type":type
            }
        }).success(function(data){
            console.log(data);
            that.check=true;
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


// write-service
write.service("md",[function(){
    this.editor=new Editor();
    var that=this;
    this.init=function(){
        that.editor.render();
    }
    this.getval=function(){
        return that.editor.codemirror.getValue();
    }
}])

write.service("create",["$http","$q",function($http,$q){
    this.check=false;
    var that=this;
    this.create=function(content,title,date){
        var deffer=$q.defer();
        $http({
            url:"create",
            method:"POST",
            data:{
                "title":title,
                "content":content,
                "date":date
            }
        }).success(function(data) {
            that.check=true;
            deffer.resolve(data);
        })
        that.promise=deffer.promise;
    }
}])

write.service("initdate",[function(){
    this.date="";
    var that=this;
    this.init=function(){
        var mydate=new Date();
        
        var year=mydate.getFullYear();
        var month=mydate.getMonth();
        var day=mydate.getDate();
        
        that.date+=year+"-";
        
        if(month<9){
            month++;
            that.date+="0"+month+"-";
        }else{
            that.date+=month+"-";
        }
        
        if(day<10){
            that.date+="0"+day;
        }else{
            that.date+=day;
        }
    }
}])
