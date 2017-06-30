var map;

function initMap() {

	var everett = {
		lat: 44.193342, 
		lng: -79.934449
	};

	map = new google.maps.Map(document.getElementById('map'), {
		center: everett,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: everett,
		map: map
	})

	// function EverettLocation(position, name, address, phone, website, imgurl) {
	// var self = this;
	// self.position = position;
	// self.name = name;
	// self.address = address;
	// self.website = website;
	// self.imgurl = imgurl;
	// };

	// var ViewModel = function(){
	// 	var self = this;

	// 	self.location = {city: ko.observable('Everett'), province: "Ontario", postalcode: "L0M 1J0"},

	// 	self.places = ko.observableArray([
	// 		new EverettLocation({lat: 44.190425, lng: -79.942260}, 'Bailey\'s Potato Farm', '8159 Main Street', '(705) 435-5764'),
	// 		new EverettLocation({lat: 44.194573, lng: -79.941582}, 'RV There Yet Tent Trailer Rentals', '6218 County Rd 13', '(705) 434-9964', 'https://www.rvthereyettrailerrentals.com'),
	// 		new EverettLocation({lat: 44.193627, lng: -79.941400}, 'Royal Canadian Legion Branch 508', '6190 County Rd 13', '705 435-5769', 'everettlegion.ca'),
	// 		new EverettLocation({lat: 44.195604, lng: -79.941872}, 'Adjala-Tosorontio Township Fire Station 1', '6234 County Rd 13'),
	// 		new EverettLocation({lat: 44.191404, lng: -79.938460}, 'Everett Variety & Snack', '8097 Main Street', '(705) 435-9616'),
	// 		new EverettLocation({lat: 44.191514, lng: -79.936742}, 'Pizza Express', '8069 Main Street', '(705) 250-2016'),
	// 		new EverettLocation({lat: 44.191535, lng: -79.936586}, 'MoneyGram', '8069 Main Street', '(705) 435-4537', 'moneygram.ca'),
	// 		new EverettLocation({lat: 44.191535, lng: -79.936586}, 'Everett Post Office', '8069 Main Street', '(705) 435-4537'),
	// 		new EverettLocation({lat: 44.189502, lng: -79.940185}, 'St David\'s Anglican Church and Cemetery', '6095 County Rd 13'),
	// 				]);
	// };

	// ko.applyBindings(new ViewModel());

};

