// $(document).ready(function(){
//     var la=new CreateLatestArticle();
    
//     //初始化弹窗
//     $('[data-toggle="popover"]').popover({
//         html:true
//     })
    
//     //轮播窗口
//     changeCarousel();
    
//     //初始化技能树
//     drawTechtree();
    
//     // togglenav();
// })

// function getBingPic(){
//     $.ajax({
//         url:"http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1",
//         type:"GET",
//         dataType:"jsonp",
//         jsonp: "callback",
//         success:function(data){
            
//         }
//     })
// }

// function getBingTxt(){
//     $.ajax({
//         url:"http://tu.ihuan.me/api/bing/text",
//         type:"GET",
//         dataType:"jsonp",
//         success:function(data){
//             console.log(data);
//         }
//     })
// }

// function CreateLatestArticle(){
//     this.latestArticle=getArticle()[0];
//     $("<p><span>最新内容</span>&nbsp&nbsp&nbsp"+this.latestArticle.date+"&nbsp&nbsp&nbsp<a href='#'>"+this.latestArticle.title+"</a></p>").appendTo($(".footer div"));
// }

// function togglenav(){
//     $("body").click(function(){
//         $("nav").fadeOut(500);
//     })
//     $(document).on("mousewheel DOMMouseScroll", function (e) {
//         $("nav").fadeIn(500);
//     });
// }

// function changeCarousel(){
//     $("#techtree").click(function(){
//         $(".techtree-box").show(300);
//         $(".project-box").hide(300);
//     })
//     $("#project").click(function(){
//         $(".techtree-box").hide(300);
//         $(".project-box").show(300);
//     })
// }

// function filp(){
//     $(".front").click(function(){
        
//     })
// }

// function drawTechtree(){
//     var ctx=document.getElementById("techtree-cvs").getContext("2d");
    
//     var data = {
//         labels : ["CSS","JavaScript","JQuery","Bootstrap","AngularJs","NodeJS","HTML"],
//         datasets : [
//             {
//                 fillColor : "rgba(220,220,220,0.5)",
//                 strokeColor : "rgba(220,220,220,1)",
//                 pointColor : "rgba(220,220,220,1)",
//                 pointStrokeColor : "#fff",
//                 data : [90,85,80,60,45,90,100]
//             }
//         ]
//     }
    
//     var defaults = {
				
//         //Boolean - If we show the scale above the chart data			
//         scaleOverlay : false,
        
//         //Boolean - If we want to override with a hard coded scale
//         scaleOverride : false,
        
//         //** Required if scaleOverride is true **
//         //Number - The number of steps in a hard coded scale
//         scaleSteps : null,
//         //Number - The value jump in the hard coded scale
//         scaleStepWidth : null,
//         //Number - The centre starting value
//         scaleStartValue : null,
        
//         //Boolean - Whether to show lines for each scale point
//         scaleShowLine : true,

//         //String - Colour of the scale line	
//         scaleLineColor : "rgba(0,0,0,.1)",
        
//         //Number - Pixel width of the scale line	
//         scaleLineWidth : 1,

//         //Boolean - Whether to show labels on the scale	
//         scaleShowLabels : false,
        
//         //Interpolated JS string - can access value
//         scaleLabel : "<%=value%>",
        
//         //String - Scale label font declaration for the scale label
//         scaleFontFamily : "'Arial'",
        
//         //Number - Scale label font size in pixels	
//         scaleFontSize : 12,
        
//         //String - Scale label font weight style	
//         scaleFontStyle : "normal",
        
//         //String - Scale label font colour	
//         scaleFontColor : "#666",
        
//         //Boolean - Show a backdrop to the scale label
//         scaleShowLabelBackdrop : true,
        
//         //String - The colour of the label backdrop	
//         scaleBackdropColor : "rgba(255,255,255,0.75)",
        
//         //Number - The backdrop padding above & below the label in pixels
//         scaleBackdropPaddingY : 2,
        
//         //Number - The backdrop padding to the side of the label in pixels	
//         scaleBackdropPaddingX : 2,
        
//         //Boolean - Whether we show the angle lines out of the radar
//         angleShowLineOut : true,
        
//         //String - Colour of the angle line
//         angleLineColor : "rgba(0,0,0,.1)",
        
//         //Number - Pixel width of the angle line
//         angleLineWidth : 1,			
        
//         //String - Point label font declaration
//         pointLabelFontFamily : "'Arial'",
        
//         //String - Point label font weight
//         pointLabelFontStyle : "normal",
        
//         //Number - Point label font size in pixels	
//         pointLabelFontSize : 12,
        
//         //String - Point label font colour	
//         pointLabelFontColor : "#666",
        
//         //Boolean - Whether to show a dot for each point
//         pointDot : true,
        
//         //Number - Radius of each point dot in pixels
//         pointDotRadius : 3,
        
//         //Number - Pixel width of point dot stroke
//         pointDotStrokeWidth : 1,
        
//         //Boolean - Whether to show a stroke for datasets
//         datasetStroke : true,
        
//         //Number - Pixel width of dataset stroke
//         datasetStrokeWidth : 2,
        
//         //Boolean - Whether to fill the dataset with a colour
//         datasetFill : true,
        
//         //Boolean - Whether to animate the chart
//         animation : true,

//         //Number - Number of animation steps
//         animationSteps : 60,
        
//         //String - Animation easing effect
//         animationEasing : "easeOutQuart",

//         //Function - Fires when the animation is complete
//         onAnimationComplete : null
        
//     }
    
//     var myNewChart = new Chart(ctx).Radar(data,defaults);
// }


// 临时
$(function(){
    
})