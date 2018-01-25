$(document).ready(function(){
	var dom=$(".nav li");
	var tag=$(".wire");
	dom.mouseover(function(event){
		var target=$(event.target);
		var left=target.position().left;
		console.log(left);
       tag.animate({
			left:left+'px'
		},300);
	});
})