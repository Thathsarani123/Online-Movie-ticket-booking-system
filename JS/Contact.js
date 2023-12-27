function enable(){
	if(document.getElementById("policy").checked){
		document.getElementById("tot").disabled=false;
	}
	else{
		document.getElementById("tot").disabled=true;
	}
}

function welcome(){
	alert("We getted your Inquiry / Comments");
}