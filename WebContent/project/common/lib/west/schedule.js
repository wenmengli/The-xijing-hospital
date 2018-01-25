/**
 * 
 */
function Schedule(options){
	var me = this;
	
	me.element = $(options.element);
	
	me.doctor = options.doctor;
	
	me.schedule = me.doctor.schedule;
	
	me.toolTip = $("<div class='schedule-tooltip'><span style='color:#aaa;'>挂号费：</span><span class='fee' style='color:#059981;'></span></div>")
	
	$(document.body).append(me.toolTip);
	
	me.renderSchedule();
}

Schedule.prototype.renderSchedule = function(){
	var me = this;
	
	me.amContainer = $("<ul class='am-container'></ul>");
	me.pmContainer = $("<ul class='pm-container'></ul>");
	
	var amText = $("<li class='text'>上午</li>");
	var pmText = $("<li class='text'>下午</li>");
	
	me.amContainer.append(amText);
	me.pmContainer.append(pmText);
	
	for(var i = 0; i < 7; i++){
		var ali = $("<li class='schedule-disable'></li>"),
			pli = $("<li class='schedule-disable'></li>");
		
		me.amContainer.append(ali);
		me.pmContainer.append(pli);
	}
	
	me.element.append(me.amContainer).append(me.pmContainer);
	
	me.element.on("mouseover mouseout","li.schedule-disable", function(event){
		var target = $(event.target);
		if(event.type=="mouseover" && target.hasClass("schedule-enable")){
			target.addClass("schedule-enable-hover");
			var fee = (target.attr("fee")-0).toFixed(2);
			fee = "￥"+fee+"元";
			var offset = target.offset();
			
			me.toolTip.find(".fee").html(fee);
			me.toolTip.css({
				display:'block',
				left :offset.left + 25 -83 +"px",
				top:offset.top+53+"px"
			});
		}else{
			target.removeClass("schedule-enable-hover");
			me.toolTip.css({
				display:'none'
			});
		}
	})
}

/**
 * 更新排班数据
 */
Schedule.prototype.updateSchedule = function(dates){
	var me = this;
	
	me.amContainer.find("li.schedule-disable").removeClass("schedule-enable schedule-booked schedule-out-service");
	me.pmContainer.find("li.schedule-disable").removeClass("schedule-enable schedule-booked schedule-out-service");
	
	for(var i=0; i<dates.length; i++){
		var dateStr = dates[i].dateStr;
		
		for(var j=0; j<me.schedule.length;j++){
			var sd = me.schedule[j].date.substring(5, 10);
			var type = me.schedule[j].type;
			var status = me.schedule[j].status;
			var fee = me.schedule[j].fee;
			if(sd == dateStr){
				var li = me.amContainer.find("li.schedule-disable")[i];
				if(type == "下午"){
					li = me.pmContainer.find("li.schedule-disable")[i];
				}
				
				var cls = "";
				if(status == 1){
					cls = "schedule-enable";
				}else if(status == 2){
					cls = "schedule-booked";
				}else if(status == 3){
					cls = "schedule-out-service";
				}
				
				$(li).addClass(cls).attr("fee",fee);
			}
		}
	}
}
