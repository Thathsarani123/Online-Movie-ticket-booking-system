var card_holder = document.forms['form']['card_holder'];
var card_number = document.forms['form']['card_number'];
var expiry_date = document.forms['form']['expiry_date'];
var CVC = document.forms['form']['CVC'];

var ChError=document.getElementById('ChError');
var CnError=document.getElementById('CnError');
var EdError=document.getElementById('EdError');
var CVCError=document.getElementById('CVCError');

function validated(){
	if(card_holder.value.length<17){
		card_holder.style.border="1px solid red";
		card_holder.focus();
		return false;
	}
	
}

