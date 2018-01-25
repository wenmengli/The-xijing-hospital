/**
 * text.js
 * 1.依赖于requirejs的一个模块代码，需要由requirejs引入当前环境
 * 2.当我们需要在某个模块引入非js文件时，只需要在模块定义的依赖部分添加'text!paths/file';
 * 
 * mustache.js
 * 用于将html进行动态解析，然后给出计算后的html代码
 */
define(['datasource','text!templates/doctor.html'], function(dataSource, doctorTemp){
	var renderService = {};
	
	var showAll = false;
	
	var schedules = [];
	
	renderService.init = function(){
		var calendar = new Calendar({
			element :'.schedule-container .title-container .calendar',
			startDate: new Date(),
			inteval : 28
		});
		
		calendar.on("change",function(dates){
			for(var i=0; i<schedules.length;i++){
				schedules[i].updateSchedule(dates);
			}
		})
		
		var desc = dataSource.getDeptDesc();
		
		$(".dept-desc").html(desc);
		
		$(".dept-desc").readmore({
			//声明文字个数
			substr_len: 380,
			//更多连接
			more_link: '<a class="read-more pad-l-10" href="javascript:void(0)">展开>></a>'
		});
		
		//绑定点击事件
		$(".dept-desc").on("click",function(event){
			var target = $(event.target);
			
			if(target.hasClass("read-more")){
				$(".dept-desc").html(desc);
				
				if(showAll){
					$(".dept-desc").readmore({
						//声明文字个数
						substr_len: 400,
						more_link: '<a class="read-more pad-l-10" href="javascript:void(0)">展开>></a>'
					});
					showAll = false;
				}else{
					$(".dept-desc").append('<a class="read-more pad-l-10" href="javascript:void(0)"><<收起</a>');
					showAll = true;
				}
			}
		})
		
		
		var doctors = dataSource.getDoctors();
		
		for(var i=0;i<doctors.length;i++){
			doctors[i].img = function(){
				//this指针指向doctors[i];
				if(this.sex == 'F'){
					return 'default-woman-doc';
				}
				return 'default-man-doc';
			}
			
			if(doctors[i].desc == null){
				doctors[i].desc = '暂无特长描述';
			}
		}
		//datas必须在模板doctorTemp中有定义才会修改数据
		var dom = Mustache.render(doctorTemp, {datas: doctors});
		
		$(".doctor-list").append(dom);
		
		//渲染排班组件
		for(var i=0;i<doctors.length;i++){
			var doc = doctors[i]
			var schedule = new Schedule({
				element :'.doctor-list .doctor[code='+doc.id+'] .schedule',
				doctor : doc
			});
			schedules.push(schedule);
		}
		
		//更新排班信息
		var dates = calendar.getCurrentDays();
		for(var i=0;i<schedules.length;i++){
			schedules[i].updateSchedule(dates);
		}
	}
	
	return renderService;
});



//for(var i=0;i<doctors.length;i++){
//var doc = doctors[i];
//var img = 'default-man-doc';
//if(doc.sex == "F"){
//	img = 'default-woman-doc'
//}
//var desc = '暂无特长描述';
//if(doc.desc != null){
//	desc = doc.desc
//}
//var dom = '<div class="doctor clear" code="'+doc.id+'">'+
//				'<div class="img-container float-l pad-all-20">'+
//				'<img class="" src="/xijing/project/resource/images/'+img+'.png">'+
//			'</div>'+
//			'<div class="float-l info mar-t-20">'+
//				'<div class="name lineh30 font-w-b">'+doc.name+'</div>'+
//				'<div class="level lineh30 font12">'+doc.level+'</div>'+
//				'<div class="person-desc lineh30 font13"><span class="font-w-b">特长：</span>'+desc+'</div>'+
//			'</div>'+
//			'<div class="float-l schedule mar-t-20"></div>'+
//		'</div>';
//
//$(".doctor-list").append(dom);
//
//var schedule = new Schedule({
//	element :'.doctor-list .doctor[code='+doc.id+'] .schedule',
//	doctor : doc
//});
//schedules.push(schedule);
//
//}

//var dates = calendar.getCurrentDays();
//for(var i=0; i<schedules.length;i++){
//schedules[i].updateSchedule(dates);
//}