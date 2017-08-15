let weather;

//Requests weather data from openweathermap API
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=44.193342&lon=-79.9344491&APPID=f40a647622b63f285f4935a615ee62c4&units=metric');
weatherRequest.onload = () => {
	weather = JSON.parse(weatherRequest.response);
	console.log(weather);
};
weatherRequest.send();

//creates canvas for API, navbar is defined in app.js
let ctx = document.getElementById("weatherCanvas").getContext("2d")
ctx.canvas.width = navBar.offsetWidth;

//draws desired weather data on canvas once it is retrieved from API
weatherRequest.addEventListener("load", () => {
	ctx.font = "30px Times New Roman";
	ctx.textBaseline = "top";
	ctx.fillText(weather.main.temp, 0, 0);

});