
var form_button = document.getElementById("button");
var form_name = document.getElementById("name");
var form_email = document.getElementById("email");
var form = document.getElementById("form");

form_button.addEventListener("click", Validate);

function Validate(event){
	event.preventDefault();
	var value = form_name.value;

	if (!value){
			form_name.style.border = "1px solid red";
	} 
	else {
			form_name.style.border = "1px solid gray";
	}

	var value = form_email.value;
	if (!value){
			form_email.style.border = "1px solid red";
	} 
	else {
			form_email.style.border = "1px solid gray";
	}

	console.log(value);
}

function Display(event){
if (!submit){
	form.style.display = "block";}
else
{
	form.style.display = "none";}
}

form.addEventListener ('submit', Display);
form.submit="alert('Спасибо, Ваше сообщение отправлено!')";



