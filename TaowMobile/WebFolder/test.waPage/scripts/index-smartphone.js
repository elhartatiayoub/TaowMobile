
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var textField1 = {};	// @textField
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	textField1.select = function textField1_select (event)// @startlock
	{// @endlock
		var id = sources.societe.query("Raison_Socile = :1","4D Maroc");
		id.ID;
		
		sources.societe.query("Raison_Socile = :1","4D Maroc");
		sources.contact.query("ID_Societe = :1",{params : [qsociete]});
	};// @lock

//qsociete = "146470";
//sources.qsociete.sync();
//sources.contact.query("ID_Societe = :1",{params : [qsociete]});
	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
		sources.contact.query("ID_Societe = :1",{params : [qsociete]});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("textField1", "select", textField1.select, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
