function password(){
	if(document.getElementById("password").value != document.getElementById("re-password").value)
	{
		alert("Passwords Mismatch!!");
		return false;
	}
	
	else 
	{
		alert("Successfully registered!!");
		return true;
	}
}

function enableButton(){
	if(document.getElementById("policy").checked){
		document.getElementById("btn1").disabled  =  false;
	}
	
	else{
		document.getElementById("btn1").disabled  =  true;
	}
}




