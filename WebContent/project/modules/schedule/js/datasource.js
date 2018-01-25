/**
 * 
 */
define(function(){
	
	var dataSource = {};
	
	var doctors = [{
		id:1,
		name:'庞娟',
		level:'副教授',
		desc :null,
		sex :'F',
		schedule : [{
			date:'2017/08/19 00:00:00',
			type:'上午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/08/20 00:00:00',
			type:'上午',
			fee : 10,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/08/23 00:00:00',
			type:'上午',
			fee : 5,
			status : 3//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/08/26 00:00:00',
			type:'下午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/08/30 00:00:00',
			type:'下午',
			fee : 12,
			status : 2//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/09/01 00:00:00',
			type:'下午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/09/02 00:00:00',
			type:'下午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/04/19 00:00:00',
			type:'下午',
			fee : 5,
			status : 2//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/04/23 00:00:00',
			type:'上午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/04/20 00:00:00',
			type:'上午',
			fee : 5,
			status : 3//0没有排班，1排班，2是约满，3停诊
		}]
	},{
		id:2,
		name:'杜旺磊',
		level:'副教授',
		desc :'擅长于强直性脊柱炎、类风湿关节炎、皮肌炎等疾病的诊断与治疗,并长期从事皮肤肌肉活检及关节穿刺术。',
		sex :'M',
		schedule : [{
			date:'2017/04/11 00:00:00',
			type:'上午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/04/12 00:00:00',
			type:'上午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/04/16 00:00:00',
			type:'上午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/04/21 00:00:00',
			type:'下午',
			fee : 5,
			status : 2//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/04/18 00:00:00',
			type:'下午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/04/17 00:00:00',
			type:'下午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		}]
	},{
		id:3,
		name:'巴艳娜',
		level:'副教授',
		desc :'擅长于强直性脊柱炎、类风湿关节炎等疾病的诊断与治疗',
		sex :'F',
		schedule : [{
			date:'2017/04/11 00:00:00',
			type:'上午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/04/12 00:00:00',
			type:'上午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/04/16 00:00:00',
			type:'上午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/04/17 00:00:00',
			type:'下午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/04/18 00:00:00',
			type:'下午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		},{
			date:'2017/04/19 00:00:00',
			type:'下午',
			fee : 5,
			status : 1//0没有排班，1排班，2是约满，3停诊
		}]
	}];
	
	var departmentDesc = "第四军医大学西京医院临床免疫科创建于1992年7月，前身是西京医院传染科免疫室。创建初期仅有医技人员11人，专科年门诊量2000余人次，实验室开展一些免疫诊断和治疗研究。1994年我们组建病区，成立医疗、护理组，展开病床16张，收治风湿免疫病患者并参与国家“863计划”重点课题-肝癌导向药物研究，承担肝癌单抗临床应用研究。1996年开设风湿/临床免疫本科生教学，并被批准为内科学（风湿免疫）硕士学位授权学科。2000年获批准为博士学位授权学科和临床医学博士后流动站组成学科。2005年获批准为国家药物临床实验机构组成专业（风湿/免疫）和全军风湿病专科中心。2007年获批准为细胞生物学国家重点学科组成学科（免疫细胞生物学）。2011年11月被批准为全军风湿免疫专科研究所。科室学术带头人和骨干主要学术任职有中华风湿病学会副主任委员、青年委员；中国医师学会风湿免疫分会副会长、常委、委员；中国免疫学会临床免疫分会副主任委员；陕西省风湿病学会第五、六届主委，名誉主委、副主委、常委等。 经22年发展，目前本学科已成为集医疗、教学、科研于一体的风湿免疫性疾病的诊治、研究中心和人才培养基地。拥有医教研用房2600M2。其中，风湿/免疫病区展开床位72张，年收治患者3200余人，年门诊量7.96万人次，牵头/参加临床药物研究37项。配备有关节镜手术室，B超、甲皱微循环、病理室，国家风湿/免疫药理基地和临床免疫、中试、模式动物等实验室，设备总值逾千万元。 学科现有人员99人。其中，高级职称3人，副高职称5人，中级职称15人，住院医师12人，助研6人；医教研系列36人，具有硕博士学位28人(78%)，护技系列63人。 学科长期专注于风湿免疫性疾病机制探索和诊治新技术研究，已形成特色医疗，包括：（1）免疫新疗法新制剂的基础和临床研究；（2）炎性关节病的内外科综合诊疗技术；（3）筛选脏器损伤预警指标，推进早期诊断治疗；（4）建立健康和疾病时免疫状态诊断和实验室评估体系。 近年来，承担国家“973”、“863”，重大科技专项，国家自然科学基金重点项目等15项，获经费4680万元。发表论文200余篇，其中SCI论文51篇，影响因子单篇最高10.734，5.0以上13篇，4以上24篇。获发明专利授权8项，其中国际专利3项。获国家科技进步二等奖2项、教育部高等院校技术发明一等奖2项、省部级科技进步一等奖3项、二等奖1项；培养硕士生45名，博士生23名，博士后2名；主编教育部本科生、研究生统编教材四部，专科医师培训教材两部，副主译《凯利风湿病学》。";
	
	dataSource.getDoctors = function(){
		return doctors;
	}
	
	dataSource.getDeptDesc = function(){
		return departmentDesc;
	}
	return dataSource;
});