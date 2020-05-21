
function currentYear(){
	var currentDate = new Date();
	var yearElement = document.getElementById("currentYear");
	yearElement.innerHTML = currentDate.getFullYear();
}
currentYear();