jQuery(document).ready(function(){

	$('#user-login, #user-register').hide(0);
 
	$('#new-login').click(function(){ 
		$('#user-login').show();}	
	);
	$('#new-register').click(function(){ 
		$('#user-register').show();}	
	);
	$('#login-submit').click(function(){ 
		var username = $('#username').val();
		alert( username +" has logged in");
	});
	$('#reg-submit').click(function(){ 
		
		var user = $('#newuser').val();
		var useremail = $('#newemail').val();
		var password = $('#newpass').val();
		var conpassword = $('#newconpass').val();
		var phone =  $('#newphone').val();
		
		
   		 if (useremail.indexOf('@')!=-1 && useremail.indexOf('.')!=-1) {
			if( password== conpassword){
				if (phone.length==11) {
					alert(user+ " with "+useremail <br> +" and phone number "+phone+" has registerd"  );
				}else{
					alert("Invalid Phnone Number");
				}

			}else{
				alert("Incorrect Password");
			}
    	}else{
			alert("Incorrect Email");
		}
		
	});

});