/**
 * 
 */
define(['dataSource'],function(dataSource){
	
	var renderService={};
	 renderService.init=function(){
		$(".short-desc").readmore({
			substr_len:100,
			more_link: '<a class="read-more pad-l-20 color1" href="javascript:void(0);">查看更多>></a>'
		});
	
		$(".nav li").on("mouseover",change);
		function change(event){
			var dom=$(event.target);
			if(dom.hasClass("tab_desc")){
				$(".contents").removeClass("hidden");
				$(".tab_desc").addClass("active");
				$("#dept_list").addClass("hidden");
				$(".tab_list").removeClass("active");
                 $("#order").addClass("hidden");
 				$(".tab_order").removeClass("active");
 	            $(".wire").css({display:'block'});

				}
				else if(dom.hasClass("tab_list")){
                     $(".contents").addClass("hidden");
     				$(".tab_desc").removeClass("active");
					$("#dept_list").removeClass("hidden");
				$(".tab_list").addClass("active");
					$("#order").addClass("hidden");
					$(".tab_order").removeClass("active");
		            $(".wire").css({display:'block'});


				}
				else{
					$(".contents").addClass("hidden");
     			    $(".tab_desc").removeClass("active");
					$("#dept_list").addClass("hidden");
					$(".tab_list").removeClass("active");
					$("#order").removeClass("hidden");
					$(".tab_order").addClass("active");
		            $(".wire").css({display:'block'});

	}
				}
		//查看更多
		$(".read-more").on("click",readMore);
		function readMore(){
			$(".contents" ).removeClass("hidden")
			$(".tab_desc" ).addClass("active");
			$("#dept_list").addClass("hidden");
			$(".tab_list").removeClass("active");
			$("#order").addClass("hidden");
			$(".tab_order").removeClass("active");
            $(".wire").css({display:'none'});
				}	

	 }
	 
	 var list=new List({
		 element:'.list1',
		 desc:dataSource.getDepts()[0],
	 });
	 var list1=new List({
		 element:'.list2',
		 desc:dataSource.getDepts()[1],
	 });
	 var list2=new List({
		 element:'.list3',
		 desc:dataSource.getDepts()[2],
	 });
	 return renderService;
})