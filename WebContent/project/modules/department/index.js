/**
 * 
 */
requirejs.config({
	baseUrl:'/xijing/project/modules/department/',
	
	paths:{
		render:'js/render',
		dataSource:'js/datasource',
	}
});
require(['render'],function(RenderService){
	RenderService.init();
	
});