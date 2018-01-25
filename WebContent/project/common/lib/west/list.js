function List(options){
	var me=this;
	me.element=$(options.element);
	me.listDesc=options.desc;
	me.name=me.listDesc.name;
	me.descs=me.listDesc.depts;
	console.log(me.descs);
	me.init();

}
List.prototype.init=function(){
	var me=this;
	me.listName=$("<div class='float-l special_dept font-w-b'>"+me.name+"</div>");
	
	me.element.append(me.listName);
	me.specialList=$("<div class='special_list float-r'>"+"</div>");
	me.element.append(me.specialList);
	me.specialUl=$("<ul>"+"</ul>");
	me.specialList.append(me.specialUl);
	for(i=0;i<me.descs.length;i++){
		me.listContainer=$("<li class='float-l pad10 cursor '>"+me.descs[i].name+"</li>");
		me.specialUl.append(me.listContainer);
}
}
