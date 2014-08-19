
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		ds.Contrat.getUserContrat(1,
					{
						onSuccess:function(e){
						sources.contrat1.setEntityCollection(e.result);
						console.log(e.result);
						}
					, onError:function(r){
						alert(r.toString());
					}});
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.configuration.callMethod({method: "getByContrat", onSuccess:function(e){
						sources.configuration.setEntityCollection(e.result);
						console.log(sources.contrat1.ID);
						$$('mainText2').show();
						}},sources.contrat1.ID);
					
		

	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
//		var xhr=new XMLHttpRequest();
//		function  callBackFunction(){
//			if(xhr.readyState==4){
//				var res=JSON.parse(xhr.responseText);
// 				ds.Contrat.getUserContrat(res.USRid,
//					{
//						onSuccess:function(e){
//						sources.contrat1.setEntityCollection(e.result);
//						console.log(e.result);
//						//$$("select1").redraw();
//						console.log(res.name);
//						}
//					, onError:function(r){
//						alert(r.toString());
//					}});
//				}
//			};
//			xhr.open('GET','/checkLogin',false);
//		xhr.send(null);
//		xhr.onreadystatechange=callBackFunction();
				ds.Contrat.getUserContrat(1,
					{
						onSuccess:function(e){
						sources.contrat1.setEntityCollection(e.result);
						console.log(e.result);
						}
					, onError:function(r){
						alert(r.toString());
					}});
				

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
