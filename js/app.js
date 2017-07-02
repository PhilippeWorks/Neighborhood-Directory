var map;
var markers = [];

function initMap() {
	        var styles = [
          {
            featureType: 'water',
            stylers: [
              { color: '#19a0d8' }
            ]
          },{
            featureType: 'administrative',
            elementType: 'labels.text.stroke',
            stylers: [
              { color: '#ffffff' },
              { weight: 6 }
            ]
          },{
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [
              { color: '#e85113' }
            ]
          },{
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              { color: '#efe9e4' },
              { lightness: -40 }
            ]
          },{
            featureType: 'transit.station',
            stylers: [
              { weight: 9 },
              { hue: '#e85113' }
            ]
          },{
            featureType: 'road.highway',
            elementType: 'labels.icon',
            stylers: [
              { visibility: 'off' }
            ]
          },{
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [
              { lightness: 100 }
            ]
          },{
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              { lightness: -100 }
            ]
          },{
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              { visibility: 'on' },
              { color: '#f0e4d3' }
            ]
          },{
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [
              { color: '#efe9e4' },
              { lightness: -25 }
            ]
          }
        ];

	var everett = {
		lat: 44.193342, 
		lng: -79.934449
	};

	map = new google.maps.Map(document.getElementById('map'), {
		center: everett,
		zoom: 15,
		styles: styles,
		mapTypeControl: false
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

	var defaultIcon = makeMarkerIcon('0091ff');

	var highlightedIcon = makeMarkerIcon('FFFF24');


	for(var i = 0; i < locations.length; i++) {
		var position = locations[i].position;
		var title = locations[i].title;

		var marker = new google.maps.Marker({
			position: position,
			title: title,
			icon: defaultIcon,
			animation: google.maps.Animation.DROP,
			id: i
		});

		markers.push(marker);

		marker.addListener('click', function(){
			populateInfoWindow(this, allInfoWindow)
		});

		marker.addListener('mouseover', function() {
			this.setIcon(highlightedIcon);
		});

		marker.addListener('mouseout', function() {
			this.setIcon(defaultIcon);
		});
	};

	document.getElementById('show-locations').addEventListener('click', showListings);
	document.getElementById('hide-locations').addEventListener('click', hideListings);

	};

	function populateInfoWindow(marker, infowindow) {
		if (infowindow.marker != marker) {
			infowindow.marker = marker;
			infowindow.setContent('<div>' + marker.title +'</div>');
			infowindow.open(map, marker);

			infowindow.addListener('closeclick', function() {
				infowindow.marker = null;
			});
		}
	}

	      // This function will loop through the markers array and display them all.
      function showListings() {
        var bounds = new google.maps.LatLngBounds();
        // Extend the boundaries of the map for each marker and display the marker
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
          bounds.extend(markers[i].position);
        }
        map.fitBounds(bounds);
      }
      // This function will loop through the listings and hide them all.
      function hideListings() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
      };

            function makeMarkerIcon(markerColor) {
        var markerImage = new google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new google.maps.Size(21, 34),
          new google.maps.Point(0, 0),
          new google.maps.Point(10, 34),
          new google.maps.Size(21,34));
        return markerImage;
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