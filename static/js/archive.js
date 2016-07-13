$(function(){
    getCatlog();
})

function getCatlog(){
    $.ajax({
        url:"getCatalog",
        method:"GET",
        success:function(catalogArr){
            console.log(catalogArr);
            var arr2015=[];
            var arr2016=[];
            var arr2017=[];
            $.each(catalogArr,function(index,data){
                var date=data.date.substring(0,4);
                switch (date){
                    case "2015":
                        arr2015[arr2015.length]=data;
                        break;
                    case "2016":
                        arr2016[arr2016.length]=data;
                        break;
                    case "2017":
                        arr2017[arr2017.length]=data;
                        break;
                }
            })
            createCatalog(arr2017,2017);
            createCatalog(arr2016,2016);
            createCatalog(arr2015,2015);
        }
    })

    function createCatalog(arr,year){
        if(arr.length==0){
            return false; 
        }else{
            console.log(arr)
            $("<div class='year arr'"+year+"><h2 class='text-center'>"+year+"</h2></div>").appendTo($(".content"));
            $.each(arr,function(index,data){
                var a="<p><a href='article?id='"+data.id+"><span class='pull-left'>"+data.title+"</span></a><span class='pull-right'>"+data.date+"</span></p>";
                console.log(a);
                $("<p><a href='article?id="+data.id+"'><span class='pull-left'>"+data.title+"</span></a><span class='pull-right'>"+data.date+"</span></p>").appendTo($(".year").last());
            })
        }
    }
}