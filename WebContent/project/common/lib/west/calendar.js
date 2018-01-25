/**
 * 
 */

function Calendar(options){
	var me = this;
	me.element = $(options.element);
	me.startDate = options.startDate;
	me.inteval = options.inteval||7;
	//组件开始时，从第零页开始计数
	me.index = 0;
	
	me.dates = me.getDates();
	
	me.renderCalendar();
	
	me.changeStatus();
}

//函数输出结果
Calendar.prototype.getDates = function(){
	/**
	 * [{
	 * 	date: 2016-09-03
	 *  dateStr : '09/04',
	 *  weekNane : '周日'
	 * },
	 * {
	 * 	date: 2016-09-04 new Date()
	 *  dateStr : '09/05',
	 *  weekNane : '周一'
	 * }]
	 */
	
	var me = this;
	
	if(me.inteval%7 != 0){
		alert("时间跨度值应该是7的倍数");return;
	}
	
	var time = me.startDate.getTime();
	var result = [];
	
	for(var i = 1; i <= me.inteval; i++){
		//使用time累加毫秒数 i*24*3600*1000 ;可以有效的避开跨月时间问题
		var date = new Date(time + i*24*3600*1000);
		var month = date.getMonth()+1;
		var day = date.getDate();
		var weekName = me.getShortWeekName(date.getDay());
		
		month = month < 10 ? ("0"+month):month;
		day = day < 10 ? ("0"+day):day;
		var dateStr = month+"/"+day;
		
		result.push({
			date:date,
			dateStr:dateStr,
			weekName:weekName,
		})
	}
	
	return result;
}

Calendar.prototype.getShortWeekName = function(day){
	var weekName = ['周日','周一','周二','周三','周四','周五','周六'];
	return weekName[day];
}

Calendar.prototype.renderCalendar = function(){
	var me = this;
	
	me.lastBtn = $("<div class='calendar-last-btn calendar-lastbtn-disable-icon'></div>");
	me.nextBtn = $("<div class='calendar-next-btn calendar-nextbtn-disable-icon'></div>");
	me.ulContainer = $("<ul class='calendar-ul-container'></ul>");
	
	for(var i=0;i<7;i++){
		var li = $("<li>" +
				"<div class='calendar-date'>"+me.dates[i].dateStr+"</div>" +
				"<div class='calendar-week'>"+me.dates[i].weekName+"</div>" +
				"</li>");
		
		me.ulContainer.append(li);
	}
	
	me.element.append(me.lastBtn).append(me.ulContainer).append(me.nextBtn);
	
	me.lastBtn.on("click",function(event){
		var target = $(event.target);
		
		if(!target.hasClass("calendar-lastbtn-enable-icon")){
			return;
		}
		
		me.index--;
		
		me.changeStatus();
		me.renderDay();
	});
	
	me.nextBtn.on("click",function(event){
		var target = $(event.target);
		
		if(!target.hasClass("calendar-nextbtn-enable-icon")){
			return;
		}
		
		me.index++;
		
		me.changeStatus();
		me.renderDay();
	});
	
	//添加浮动样式
	me.lastBtn.on("mouseover mouseout", function(event){
		var target = $(event.target);
		
		if(event.type == "mouseover" && me.lastBtn.hasClass("calendar-lastbtn-enable-icon")){
			me.lastBtn.addClass("calendar-lastbtn-hover-icon");
		}else{
			me.lastBtn.removeClass("calendar-lastbtn-hover-icon")
		}
	});
	//添加浮动样式
	me.nextBtn.on("mouseover mouseout", function(event){
		var target = $(event.target);
		
		if(event.type == "mouseover" && me.nextBtn.hasClass("calendar-nextbtn-enable-icon")){
			me.nextBtn.addClass("calendar-nextbtn-hover-icon");
		}else{
			me.nextBtn.removeClass("calendar-nextbtn-hover-icon")
		}
	});
}

Calendar.prototype.changeStatus = function(){
	var me = this;
	
	//设定左侧按钮状态
	if(me.index == 0){
		me.lastBtn.removeClass("calendar-lastbtn-enable-icon");
		me.lastBtn.removeClass("calendar-lastbtn-hover-icon");
	}else{
		me.lastBtn.addClass("calendar-lastbtn-enable-icon");
	}
	//设置右侧按钮状态
	var maxPage = this.dates.length/7 - 1;
	
	if(this.index == maxPage){
		me.nextBtn.removeClass("calendar-nextbtn-enable-icon");
		me.nextBtn.removeClass("calendar-nextbtn-hover-icon");
	}else{
		me.nextBtn.addClass("calendar-nextbtn-enable-icon");
	}
	
	me.fire("change", me.getCurrentDays());
}

Calendar.prototype.renderDay = function(){
	var me = this;
	
	var days = me.ulContainer.find(".calendar-date"),
		weekNames = me.ulContainer.find(".calendar-week");
	
	for(var i = 0; i < 7; i++){
		$(days[i]).html(me.dates[me.index*7+i].dateStr);
		$(weekNames[i]).html(me.dates[me.index*7+i].weekName);
	}
}

Calendar.prototype.getCurrentDays = function(){
	var me = this;
	
	var result = me.dates.slice(me.index*7, me.index*7+7);
	
	return result;
}

EventUtil.extend(Calendar);