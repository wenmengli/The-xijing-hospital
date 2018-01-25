/**
 * 
 */
define(function(){
	
	var dataSource = {};
	
	var doctors =[{doctorName:'李时珍',sex:'M', doctorTitle:'主任医师', img:'/xijing/project/modules/home/images/doctorli.png',deptName:'胸外科'},
            {doctorName:'李全波',sex:'	F', doctorTitle:'教授',img:'/xijing/project/modules/home/images/doctorli.png', deptName:'中医科'},
            {doctorName:'王爽', sex:'F',doctorTitle:'副教授',img:'/xijing/project/modules/home/images/doctorli.png', deptName:'心脏科'},
            {doctorName:'郑达伦', sex:'M',doctorTitle:'主任医师',img:'/xijing/project/modules/home/',deptName:'呼吸科'},
            {doctorName:'刘益铭', sex:'F',doctorTitle:'主任医师',img: ' ',deptName:'心血管外科'},
            {doctorName:'刘益铭', sex:'F',doctorTitle:'主任医师',img: ' ',deptName:'心血管外科'}];
	
	var news = [{title:'习近平视察南部战区陆军机关',img:'resource/2017-04-23001.png',content:'他用左手向习近平敬军礼，所有将军中他独一无二'},
	            {title:'没谁了，郜林是目前恒大最有想象力球员',img:'',content:'没谁了，郜林是目前恒大最有想象力球员'},
	            {title:'《速8》想登顶2017年票房冠军？这些大片答应了吗',img:'',content:'《速8》想登顶2017年票房冠军？这些大片答应了吗'},
	            {title:'世界读书日，探访各地最美书店',img:'resource/2017-04-23.png',content:'世界读书日，探访各地最美书店'}];
	
	var mainNew = {title:'暖心7月大行动',img:'resource/2017-04-23002.png',content:'暖心7月大行动'}
	
	dataSource.getDoctors = function(){
		return doctors;
	}
	
	dataSource.getNews = function(){
		return news;
	}
	
	dataSource.getMainNew = function(){
		return mainNew;
	}
	return dataSource;
});