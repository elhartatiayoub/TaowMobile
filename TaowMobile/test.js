////var idSociete = ds.Contact.query('ID_User = :1 ',1).ID_Societe;

////var Contrat_ = ds.Contrat.query('ID_Societe = :1 ',idSociete[0]).ID_Contrat_type;
//////Contrat_type.ID_Contrat_type;
//////Contrat_[0];
////ds.Contrat_Type.query('ID = :1 ' , Contrat_[0]);
//ds.Incident.all().status;


//function getUserContrat(userID){//
//	console.log(userID +" Taow4D");		
//	var tok=currentSession().promoteWith('Admin');
//	var idSociete = ds.Contact.query('ID_User = :1 ',userID).ID_Societe;
//	var userContrat = ds.Contrat.query('ID_Societe = :1 ',idSociete);
//	currentSession().unPromote(tok);



ds.Contrat.getUserContrat(1907088,"4D Mobile");
//var idSociete = ds.Contact.getByUser(1907088);
//idSociete.forEach(function(idSociet){

