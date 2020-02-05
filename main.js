jQuery(document).ready(function () {

	$('.join-user, #user-register, #email-verify, #user-verify, #phone-verify, #password-verify, #confirm-verify').hide(0);


	$('#new-login').click(function () {
		$('#initial').html($('.join-user').html());
			
		$('#initial').removeClass();
		$('#initial').addClass('join-user');	


 	
	}
	);
	$('#new-register').click(function () {

		$('#initial').html($('.join-register').html()); 	
		$('#initial').removeClass();
		$('#initial').addClass('join-register');	
		// /$('#initial').style = $('.join-register').style;


  		$('#newemail').keyup(function () {
   		$('#email-v`erify').show();
   		var newemail = $('#newemail').val();
		if (newemail.indexOf('@') != -1 && newemail.indexOf('.') != -1) {
			$('#email-verify').css({ "color": "green"});		
		}else{
			$('#email-verify').css({ "color": "red"});
		}
									}
		);



  		 $('#newuser').keyup(function () {
   		$('#user-verify').show();
   		var newuser = $('#newuser').val();
		if (newuser !="") {
			$('#user-verify').css({ "color": "green"});		
		}else{
			$('#user-verify').css({ "color": "red"});
		}
					}
		);



  		$('#newphone').keyup(function () {
   		$('#phone-verify').show();
   		var newphone = $('#newphone').val();
		if (phone.length == 11) {
			$('#phone-verify').css({ "color": "green"});		
		}else{
			$('#phone-verify').css({ "color": "red"});
		}
			}
		);

   		$('#newpass').keyup(function () {
   		$('#password-verify').show();
   		var newpass = $('#newpass').val();

		if ( newpass.length >=10 && newpass.indexOf('2','1') != -1) {
			$('#password-verify').css({ "color": "green"});		
		}else{
			$('#password-verify').css({ "color": "red"});
		}
	}
	);


   $('#newconpass').keyup(function () {
   		$('#confirm-verify').show();
   		var newconpass = $('#newconpass').val();
   		var newpass = $('#newpass').val();
		if (newconpass == newpass) {
			$('#confirm-verify').css({ "color": "green"});		
		}else{
			$('#confirm-verify').css({ "color": "red"});
		}
	}
	);

	$('#reg-submit').click(function () {

		var user = $('#newuser').val();
		var useremail = $('#newemail').val();
		var password = $('#newpass').val();
		var conpassword = $('#newconpass').val();
		var phone = $('#newphone').val();

		if (useremail.indexOf('@') != -1 && useremail.indexOf('.') != -1) {
			if (password == conpassword) {
				if (phone.length == 11) {
					alert(user + " with " + useremail < br > +" and phone number " + phone + " has registerd");
				} else {
					alert("Invalid Phone Number");
		preventDefault();
				}

			} else {
				alert("Incorrect Password");
		preventDefault();
			}
		} else {
			alert("Incorrect Email");
		preventDefault();
		}

	});

});

	
	$('#login-submit').click(function () {
		var username = $('#username').val();
		alert(username + " has logged in");
	});


  

	//$('.ed').focus(function(){
		
		/*var useremail = $('#newemail').val();
		if (useremail.indexOf('@') != -1 && useremail.indexOf('.') != -1) {
			
		}else{

		}*/
//	});


});
