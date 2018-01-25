/**
 * 
 */
requirejs.config({
	baseUrl:'/xijing/project/modules/home/',
	paths:{
		text:'../../common/lib/requirejs/text',
		render:'js/render',
		datasource:'js/datasource',
	}
});
require(['render'],function(renderService){
		renderService.init();

});