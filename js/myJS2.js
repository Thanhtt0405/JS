$(document).ready(function(){
	$("#button").click(function(){
		
		$("div[name*='tutorial']").css("color","red");
	})
	$("#showValue").click(function(){
		$("li").each(function(index){
			if(index==2){
				alert($(this).html());
			}
		})
	})
	$("#username").keyup(function(){
		if($(this).val().length<3||$(this).val().length>12){
			$("#usernameerror").text("Your user name  must between 3 and 12 characters").css("background-color","green");
		}
		else{
			$("#usernameerror").text("");
		}
	})
	$("#password").keyup(function(){
		if($(this).val().length<4||$(this).val().length>12){
				$("#passworderror").text("Your password must between 4 and 12 characters");
		}
		else{
			$("#passworderror").text("");
		}
	})
	$("#confirmpassword").keyup(function(){
		if($(this).val()!=$("#password").val()){
				$("#confirmpassworderror").text("Password doesn't match!");
		}
		else{
			$("#confirmpassworderror").text("");
		}
	})
	
	$("#email").keyup(function(){
		var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
		if (testEmail.test($(this).val())){
			$("#emailerror").text("");
		}
    
		else{
			$("#emailerror").text("invalid email!");
		}
    // 
	})
})