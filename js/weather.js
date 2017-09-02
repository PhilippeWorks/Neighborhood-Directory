let weather;
const headers = document.getElementById("headers");
let weatherElement = document.createElement("h2");

//Requests weather data from openweathermap API
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=44.193342&lon=-79.9344491&APPID=f40a647622b63f285f4935a615ee62c4&units=metric');
weatherRequest.onload = () => {
	weather = JSON.parse(weatherRequest.response);
	console.log(weather);
};
weatherRequest.send();

//uses data retrieved from API
weatherRequest.addEventListener("load", () => {
	weatherElement.innerHTML = "currently " + weather.main.temp + "°C" + " with " + weather.weather[0].description;
	headers.appendChild(weatherElement);
});