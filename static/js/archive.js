$(function(){
    getCatlog();
})

function getCatlog(){
    $.ajax({
        url:"getCatalog",
        method:"GET",
        success:function(catalogArr){
            catalogArr=catalogArr.reverse();

            var yearArr=[];
            $.each(catalogArr,function(i,data){
                var date=data.date.substring(0,4);
                var flag=false;
                if(yearArr.length==0){
                    yearArr.push(date);
                }else{
                    $.each(yearArr,function(j,year){
                        if(year==date){
                            flag=true;
                            return false;
                        }
                    })
                    if(!flag){
                        yearArr.push(date);
                    }
                }
            })

            $.each(yearArr,function(i,year){
                var result=[];
                $.each(catalogArr,function(j,data){
                    var date=data.date.substring(0,4);
                    if(year==date){
                        result.push(data);
                    }
                })
                createCatalog(result,year);
            })
        }
    })

    function createCatalog(arr,year){
        if(arr.length==0){
            return false; 
        }else{
            $("<div class='year arr'"+year+"><h2 class='text-center'>"+year+"</h2></div>").appendTo($(".content"));
            $.each(arr,function(index,data){
                var a="<p><a href='article?id='"+data.id+"><span class='pull-left'>"+data.title+"</span></a><span class='pull-right'>"+data.date+"</span></p>";
                $("<p><a href='article?id="+data.id+"'><span class='pull-left'>"+data.title+"</span></a><span class='pull-right'>"+data.date+"</span></p>").appendTo($(".year").last());
            })
        }
    }
}