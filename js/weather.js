$(document).ready(function(){
	var city = "Lexington";
	$.ajax({
		url:"http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial"+
		"&APPID=c8db00af01dc960fbe302f2a3df181e9",
		type:"GET",
		dataType:"jsonp",
		success:function(data){
			var widget = show(data);
			$("#showWeather").html(widget);
		}
	});
});

function show(data){
	return "<table style='text-align:center;'>"+
			"<tr><td class='weatherData'>Weather:</td><td>"+ data.weather[0].main +"</td><td rowspan='2'><img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'></td></tr>"+
			"<tr><td  class='weatherData'>Description:</td><td>"+ data.weather[0].description +"</td></tr>"+
			"<tr><td  class='weatherData'>Temperature:</td><td>"+ Math.round(data.main.temp) +"&deg;F</td></tr>"+
			"<tr><td class='weatherData'>Pressure:</td><td>"+ data.main.pressure +"hPa</td></tr>"+
			"<tr><td class='weatherData'>Humidity:</td><td>"+ data.main.humidity +"%</h4>"+
			"<tr><td class='weatherData'>Min Temperature:</td><td>"+ Math.round(data.main.temp_min) +"&deg;F</td></tr>"+
			"<tr><td class='weatherData'>Max Temperature:</td><td>"+ Math.round(data.main.temp_max) +"&deg;F</td></tr>"+
			"<tr><td class='weatherData'>Wind:</td><td>"+ Math.round(data.wind.speed) +"mph</td></tr>";
			
}
		
