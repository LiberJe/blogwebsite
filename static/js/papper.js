$(function(){
    var article_id=(window.location.href).substring((window.location.href).lastIndexOf("=")+1);
    getComments(article_id);

    $(".publish").click(function(){
        var cname=$("#cname").val();
        var cemail=$("#cemail").val();
        var ccomment=$("#ccomment").val();

        //表单验证
        var flag=inputCheck(cname,cemail,ccomment);
        if(flag){
            var date=new Date();
            var now="";
            now=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
            var postData={
                "article_id":article_id,
                "name":cname,
                "email":cemail,
                "content":ccomment,
                "date":now
            }
            publishComment(postData);
        }
        
    })

    function publishComment(data){
        $.ajax({
            url:"commentPublish",
            method:"POST",
            data:JSON.stringify(data),
            success:function(data){
                if(data.check){
                    getComments(article_id);
                    toastr.success("发布成功");
                }else{
                    toastr.warning("发布失败");
                }
            }
        })
    }

    function getComments(id){
        $.ajax({
            url:"getComments",
            method:"POST",
            data:JSON.stringify(id),
            success:function(data){
                console.log(data);
                $(".comment-list").empty();
                $("#cname").val("");
                $("#cemail").val("");
                $("#ccomment").val("");
                $.each(data,function(index,comment){
                    $(".comment-list").append("<hr><h4><b>"+comment.guest_name+"&nbsp:</b></h4><p>"+comment.guest_content+"</p><h6 class='text-right'>"+comment.date+"</h6>");
                })
            }
        })
    }

    function inputCheck(name,email,comment){
        var flag=true;
        
        //姓名验证
        if(name.trim()==""){
            toastr.warning("请输入您的大名");
            flag=false;
        }else{
            //邮箱验证
            var emailArr=email.split("@");
            if(emailArr.length!=2||emailArr[1].indexOf(".")<=0){
                toastr.warning("邮箱格式不正确");
                flag=false;
            }else{
                //评论验证
                if(comment.trim()==""){
                    toastr.warning("评论不能为空");
                    flag=false;
                }
            }
        }
        return flag;
    }
})