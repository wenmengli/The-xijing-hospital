/**
 * 
 */
requirejs.config({
	baseUrl : '/xijing/project/modules/schedule/',
	
	paths : {
		text:'../../common/lib/requirejs/text',
		render:'js/render',
		datasource:'js/datasource'
	}
});
/**
 * Amd程序主函数
 */
require(['render'], function(RenderService){
	RenderService.init();
});