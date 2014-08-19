
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var nextButton1 = {};	// @button
	var button2 = {};	// @button
	var select2 = {};	// @select
	var select1 = {};	// @select
// @endregion// @endlock

// eventHandlers// @lock

	nextButton1.click = function nextButton1_click (event)// @startlock
	{// @endlock
//		var str = $$('row1'').getValue();
//		alert(str);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var xhr=new XMLHttpRequest();
		function  callBackFunction(){
			var sel1 = $$('select1').getValue();
			sources.userID = 1907088; //res.USRid
			if(xhr.readyState<4){
				$$('select1').setState(disabled);
			}
			if(xhr.readyState==4){
 				 var res=JSON.parse(xhr.responseText);
 				 var cont = ds.Contrat.getUserContrat(sources.userID,sel1);
 				 console.log(sel1);
 				 
//=========================    to make select1 dynamique ============================
// 				 var arr = new Array();
//				 cont.forEach(function (value){
//				 	if(arr.indexOf(value.result.type.value)== -1){
//				 		arr.push(value.result.type.value);
//				 		$$('switchbox1').addRadioButton(value.result.type.value,value.result.type.value);
//				 	}
//				 }
//				 );
//				 console.log($('#radioGroup1').children().length);
//=====================================================================================						
				
				sources.contrat1.setEntityCollection(cont);
				var confs = ds.Configuration.getByUser(sources.userID,sel1);
				sources.configuration1.setEntityCollection(confs);
				console.log(sources.contrat1.ID);
				}
		}
		xhr.open('GET','/checkLogin',false);
		xhr.send(null);
		xhr.onreadystatechange=callBackFunction()
		$$('navigationView1').goToView(2);
	};// @lock

	select2.change = function select2_change (event)// @startlock
	{// @endlock
		var confID= $$('select2').getValue();
		sources.incident.setEntityCollection(sources.incident.getByConf(confID));
	};// @lock

	select1.change = function select1_change (event)// @startlock
	{// @endlock
				var sel1 = $$('select1').getValue();
				var confs = sources.configuration1.getByUser(sources.userID,sel1);
				sources.configuration1.setEntityCollection(confs);

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("nextButton1", "click", nextButton1.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("select2", "change", select2.change, "WAF");
	WAF.addListener("select1", "change", select1.change, "WAF");
// @endregion
};// @endlock
