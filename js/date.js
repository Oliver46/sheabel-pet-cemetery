	//The Date object lets you work with dates
	//getDay() returns the weekday as a number (0-6)
	//getMonth()	Get the month (0-11)
	//getDate()	Get the day as a number (1-31)
var dayOfWeek,date, monthofYear;

date = new Date();

dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById("day").innerHTML = dayOfWeek[date.getDay()];

monthofYear = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
document.getElementById("date").innerHTML =  monthofYear[date.getMonth()] +" "+date.getDate() +", "+ date.getFullYear();
