
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var goTo2 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	goTo2.click = function goTo2_click (event)// @startlock
	{// @endlock
		$$('navigationView1').goToNextView( );
//		sources.incident_value.query("ID_Incident="+(sources.incident.ID));
//		sources.incident_Pas.query("ID_Incident="+(sources.incident.ID));
		//sources.incident_Pas.ID_User.set(sources.user);//.First_Name+' '+sources.user.Last_Name);
		//sources.incident_Pas.save();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var xhr=new XMLHttpRequest();
		function  callBackFunction(){
			if(xhr.readyState==4){
 				var res=JSON.parse(xhr.responseText);
 				ds.Incident.getUserIncident(res.USRid,{
					onSuccess:function(e){
						sources.incident.setEntityCollection(e.result);
						console.log(res.name);
					}
				}
				);

			}
		}
//		console.log("okkk");
		xhr.open('GET','/checkLogin',false);
		xhr.send(null);
		xhr.onreadystatechange=callBackFunction();
//		ds.Incident.getUserIncident(
//		{
//		onSuccess:function(e){
//		sources.incident.setEntityCollection(e.result);
//		console.log(e.result);
//		}
//	}
//	);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("goTo2", "click", goTo2.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
