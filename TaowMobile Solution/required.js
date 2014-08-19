//include('C:/Users/mouhcine/Documents/Wakanda/TaowMobile (1)/TaowMobile/TaowMobile/MD5.js');
//include('MD5.js');
//include(solution.getFolder().path + 'MD5.js');
//include('C:\Users\mouhcine\Documents\Wakanda\TaowMobile (1)\TaowMobile\TaowMobile\MD5.js')
function myLogin(userMail, userPass) {
  // console.log('@@@@@@@@@@@@@@@@@@@@@@'); 
   var userDs = solution.getApplicationByName('TaowMobile').ds;
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+userDs);

    
     if (userPass == (userMail + '_Keyhashlog_')) {
     	//if (userPass =='mouhcine'){
        var tok = currentSession().promoteWith('Admin');
//        var mailDom=userMail.substring(userMail.indexOf('@')+1,userMail.length);
        var mailLogin=userMail.substring(0,userMail.indexOf('@'));
        var myUser = userDs.User({
            Motor_email_account: mailLogin
        });
        currentSession().unPromote(tok);

        
            var theGroups = ['4Dclients'];
            return {
                name: userMail,
                fullName: userMail,
                belongsTo: theGroups,
                storage: {
                    name: userMail,
                    email: userMail
                }}}
        
        
      else{ 
       return false;}
}
