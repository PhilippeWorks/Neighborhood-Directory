var map;
var markers = [];

function initMap() {

	var everett = {
		lat: 44.193342, 
		lng: -79.934449
	};

	map = new google.maps.Map(document.getElementById('map'), {
		center: everett,
		zoom: 15
	});

	var locations = [
			{ position: {lat: 44.190425, lng: -79.942260}, title: 'Bailey\'s Potato Farm', address: '8159 Main Street', phone: '(705) 435-5764'},
			{ position: {lat: 44.194573, lng: -79.941582}, title: 'RV There Yet Tent Trailer Rentals', address: '6218 County Rd 13', phone: '(705) 434-9964', website: 'https://www.rvthereyettrailerrentals.com'},
			{ position: {lat: 44.193627, lng: -79.941400}, title: 'Royal Canadian Legion Branch 508', address: '6190 County Rd 13', phone: '705 435-5769', website: 'everettlegion.ca'},
			{ position: {lat: 44.195604, lng: -79.941872}, title: 'Adjala-Tosorontio Township Fire Station 1', address: '6234 County Rd 13'},
			{ position: {lat: 44.191404, lng: -79.938460}, title: 'Everett Variety & Snack', address: '8097 Main Street', phone: '(705) 435-9616'},
			{ position: {lat: 44.191514, lng: -79.936742}, title: 'Pizza Express', address: '8069 Main Street', phone: '(705) 250-2016'},
			{ position: {lat: 44.191535, lng: -79.936586}, title: 'MoneyGram', address: '8069 Main Street', phone: '(705) 435-4537', website: 'moneygram.ca'},
			{ position: {lat: 44.191535, lng: -79.936586}, title: 'Everett Post Office', address: '8069 Main Street', phone: '(705) 435-4537'},
			{ position: {lat: 44.189502, lng: -79.940185}, title: 'St David\'s Anglican Church and Cemetery', address: '6095 County Rd 13'}
			];

	var allInfoWindow = new google.maps.InfoWindow();
	var bounds = new google.maps.LatLngBounds();

	for(var i = 0; i < locations.length; i++) {
		var position = locations[i].position;
		var title = locations[i].title;

		var marker = new google.maps.Marker({
			map: map,
			position: position,
			title: title,
			animation: google.maps.Animation.DROP,
			id: i
		});

		markers.push(marker);

		bounds.extend(markers[i].position);

		marker.addListener('click', function(){
			populateInfoWindow(this, allInfoWindow)
		});
	};

	map.fitBounds(bounds);

	function populateInfoWindow(marker, infowindow) {
		if (infowindow.marker != marker) {
			infowindow.marker = marker;
			infowindow.setContent('<div>' + marker.title +'</div>');
			infowindow.open(map, marker);

			infowindow.addListener('closeclick', function() {
				infowindow.setMarker(null);
			});
		}
	}

	// //single marker and infowindow implementation
	// var marker = new google.maps.Marker({
	// 	position: everett,
	// 	map: map,
	// 	title: 'Everett!'
	// })

	// var infowindow = new google.maps.InfoWindow({
	// 	content: 'This is Everett'
	// });
	// marker.addListener('click', function() {
	// 	infowindow.open(map, marker);
	// });

};





	// function EverettLocation(position, title, address, phone, website, imgurl) {
	// var self = this;
	// self.position = position;
	// self.title = title;
	// self.address = address;
	// self.website = website;
	// self.imgurl = imgurl;
	// };

	// var ViewModel = function(){
	// 	var self = this;

	// 	self.location = {city: ko.observable('Everett'), province: "Ontario", postalcode: "L0M 1J0"},

	// 	self.locations = ko.observableArray([
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