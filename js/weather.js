let weather;
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=44.193342&lon=-79.9344491&APPID=f40a647622b63f285f4935a615ee62c4&units=metric');
weatherRequest.onload = () => {
	weather = JSON.parse(weatherRequest.response);
	console.log(weather);
};
weatherRequest.send();

weatherRequest.addEventListener("load", () => {
	var canvas = document.getElementById("weatherCanvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "30px Times New Roman";
	ctx.fillstyle = "black";
	ctx.fillText(weather.main.temp, 40, 40);
});