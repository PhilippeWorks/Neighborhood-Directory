var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=44.193342&lon=-79.9344491&APPID=f40a647622b63f285f4935a615ee62c4');
weatherRequest.onload = function () {
	console.log(weatherRequest.response);
};
weatherRequest.send();
