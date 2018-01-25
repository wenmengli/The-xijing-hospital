/**
 * 
 */
define(['datasource','text!html/text.html','text!html/news.html'],function(dataSource,deptTemp,newsTemp){
	var renderService={};
	renderService.init=function(){
		$(".step-content ul li").on("mouseover  mouseout",function(event){
			var target=$(event.target).closest("li");
			var textContainer=target.find(".step-text");
			var look=target.find(".details");
			var img=target.find(".tag");
			
            var  allClsName=img.attr("class"); 
            var imgClsName=allClsName.substring(0,allClsName.indexOf(" "));
            
			if(event.type=="mouseover"){
				img.addClass(imgClsName+"_hover");
				if(textContainer.is(":animated")){
					textContainer.stop().animate({
						"margin-top":20
					},150);
				}else{
					textContainer.stop().animate({
						"margin-top":20
					
				},150);
				}
				if(look.is(":animated")){
					look.stop().animate({
						"height":"32px","line-height":"32px" 
					},150)
					
				}else{
					look.stop().animate({
						"height":"32px","line-height":"32px" 
					},150)
				}
					
				}else{
					img.removeClass(imgClsName+"_hover");
					if(textContainer.is(":animated")){
						textContainer.stop().animate({
							"margin-top":60
						},150);
					}else{
						textContainer.animate({
							"margin-top":60
						
					},150);
					}
					if(look.is(":animated")){
						look.stop().animate({
							"height":"0px","line-height":"0px" 
						},150)
						
					}else{
						look.stop().animate({
							"height":"0px","line-height":"0px" 
						},150)
					}
				}
				});
		    
		
		/*$(".step-content ul li").on("mouseover",over);
		function over(event){
			var target=$(event.target);
			if(target.hasClass("tag1")){
				$('.tag1').removeClass("bg1");
				$('.tag1').addClass("bg6");
				$('.look1').removeClass("hidden");
				$('.text1').animate({top:'110px'});

								}
			else if(target.hasClass("tag2")){
				$('.tag2').removeClass("bg2");
				$('.tag2').addClass("bg7");
				$('.look2').removeClass("hidden");
				$('.text2').animate({top:'110px'});
			}else if(target.hasClass("tag3")){
				$('.tag3').removeClass("bg3");
				$('.tag3').addClass("bg8");
				$('.look3').removeClass("hidden");
				$('.text3').animate({top:'110px'});
			}else if(target.hasClass("tag4")){
				$('.tag4').removeClass("bg4");
				$('.tag4').addClass("bg9");
				$('.look4').removeClass("hidden");
				$('.text4').animate({top:'110px'});
			}else if(target.hasClass("tag5")){
				$('.tag5').removeClass("bg5");
				$('.tag5').addClass("bg10");
				$('.look5').removeClass("hidden");
				$('.text5').animate({top:'110px'});
			}									
		}
		$(".step-content ul li").on("mouseout",out);
		function out(event){
			var target=$(event.target);
			if(target.hasClass("tag1")){
				$('.tag1').removeClass("bg6");
				$('.tag1').addClass("bg1");
				$('.look1').addClass("hidden");
				$('.text1').animate({top:'150px'});
				}
			else if(target.hasClass("tag2")){
				$('.tag2').removeClass("bg7");
				$('.tag2').addClass("bg2");
				$('.look2').addClass("hidden");
				$('.text2').animate({top:'150px'});

			}	else if(target.hasClass("tag3")){
				$('.tag3').removeClass("bg8");
				$('.tag3').addClass("bg3");
				$('.look3').addClass("hidden");
				$('.text3').animate({top:'150px'});

			}		else if(target.hasClass("tag4")){
				$('.tag4').removeClass("bg9");
				$('.tag4').addClass("bg4");
				$('.look4').addClass("hidden");
				$('.text4').animate({top:'150px'});

			}		else if(target.hasClass("tag5")){
				$('.tag5').removeClass("bg10");
				$('.tag5').addClass("bg5");
				$('.look5').addClass("hidden");
				$('.text5').animate({top:'150px'});
}										
		}	*/
		$("ul.module li").on("mouseover mouseout",function(event){
			var target=$(event.target).closest("li");
			if(event.type=="mouseover"){
				if(target.hasClass("small")){
					var dom=$(event.target).closest("div.small1");
					dom.removeClass("module-border");
					dom.addClass("module-border2");
					
				}else{target.removeClass("module-border");
				target.addClass("module-border2");}
				
			}else{
				if(target.hasClass("small")){
					var dom=$(event.target).closest("div.small1");
					dom.addClass("module-border");
					dom.removeClass("module-border2");
				}else{	target.addClass("module-border");
				target.removeClass("module-border2");}
			}
				});	
		$(".seven-work").on("mouseover  mouseout",function(event){
			var dom=$(event.target);

			if(event.type=="mouseover"){
			dom.removeClass("module-border");
			dom.addClass("module-border2");
			}
			else {
				dom.removeClass("module-border2");
				dom.addClass("module-border");
			}		
		})
	}
	var doctors=dataSource.getDoctors();
	if(doctors.length>5){
		doctors=doctors.slice(0,5);
	}
	for(var i=0;i<doctors.length;i++){
		doctors[i].defaultImg=function(){
				if(this.sex=='M'){
				return 'default-man-doc';
			}
			else{
				return 'default-woman-doc';
			}
		}
		doctors[i].level=i+1;
	}
	var dom=Mustache.render(deptTemp,{datas:  doctors});
	$(".range-list>ul").append(dom);
	var news=dataSource.getNews();
	if(news.length==0){
		return;
	}
	var main=news[0];
	var lastIndex=4;
	if(news.length<4){
		lastIndex=news.length;
	}
		var newsArr=news.slice(1,lastIndex);
		var newDom=Mustache.render(newsTemp, {datas:newsArr})
		$(".news-detail2>ul").append(newDom);
	$(".news-detail img").attr('src',main.img);
	$(".news-detail p.new-title").html(main.title);
	$(".news-detail p.new-con").html(main.content);

	return renderService;
});