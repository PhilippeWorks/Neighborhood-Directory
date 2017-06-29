function EverettLocation(name, address, phone, website, imgurl, position) {
	var self = this;
	self.name = name;
	self.address = address;
	self.website = website;
	self.imgurl = imgurl;
	self.position = position;
};

var ViewModel = function {
	var self = this;

	self.standard = {city: "Everett", province: "ON", postalcode: "L0M 1J0"}

	self.places = ko.observableArray ([
		new EverettLocation('Bailey\'s Potato Farm', '8159 Main Street Everett, Everett, ON L0M 1J0', '(705) 435-5764', '', {}),
		new EverettLocation('RV There Yet Tent Trailer Rentals', '6218 County Rd 13, Everett, ON L0M 1J0', '(705) 434-9964', 'https://www.rvthereyettrailerrentals.com', '', ''),
		new EverettLocation('Royal Canadian Legion Branch 508', '6190 County Rd 13, Everett, ON L0M 1J0', '705 435-5769', 'everettlegion.ca', '', ''),
		new EverettLocation
		]);



};

//ko.applyBindings(new ViewModel());

var map;

var everett = {
	lat: 44.193342, 
	lng: -79.934449
};

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: everett,
		zoom: 15
	});
	var marker = new google.maps.Marker({
		position: everett,
		map: map
	});