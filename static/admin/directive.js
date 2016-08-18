myadmin.directive("state",["showState",function(showState){
    return{
        restrict:"A",
        link:function(scope,element,attr){
            element.click(function(){
                switch(element.text()){
                    case "文章管理":
                        showState.admin=true;
                        showState.newArticle=false;
                        showState.message=false;
                        break;
                    case "新文章":
                        showState.admin=false;
                        showState.newArticle=true;
                        showState.message=false;
                        break;
                    case "留言":
                        showState.admin=false;
                        showState.newArticle=false;
                        showState.message=true;
                        break;
                }
            })
        }
    }
}])

// myadmin.directive("newarticle",[function(md){
//     return{
//         restrict:"A",
//         link:function(scope,element,attr){
//             element.click(function(){
//                 if(element.text()=="文章管理"){
//                     location.href="admin";
//                 }
//             })
//         }
//     }
// }])
