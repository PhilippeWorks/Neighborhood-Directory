let weather;

let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=44.193342&lon=-79.9344491&APPID=f40a647622b63f285f4935a615ee62c4&units=metric');
weatherRequest.onload = () => {
	weather = JSON.parse(weatherRequest.response);
	console.log(weather);
};
weatherRequest.send();

const navBar = document.getElementById("navbar")
let ctx = document.getElementById("weatherCanvas").getContext("2d")
ctx.canvas.width = navBar.offsetWidth;

weatherRequest.addEventListener("load", () => {
	ctx.font = "30px Times New Roman";
	ctx.textBaseline = "top";
	ctx.fillText(weather.main.temp, 0, 0);

});