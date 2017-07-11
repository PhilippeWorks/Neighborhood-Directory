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

//shouldve used classes to create obj's

class Location {
	constructor (latitude, longitude, title, address, phone, website, hours) {
		this.position = {
			lat: latitude, 
			lng: longitude
			};
		this.title = title;
		this.address = address;
		this.phone = phone;
		this.website = website;
		this.hours = {
			monday: hours[0],
			tuesday: hours[1],
			wednesday: hours[2],
			thursday: hours[3],
			friday: hours[4],
			saturday: hours[5],
			sunday: hours[6]
			};
		locations.push(this);
	}
};

var locations = [];

//Location(latitude, longitude, title, address, phone, website, hours)
var baileysFarm = new Location('44.189938', '-79.944931', 'Bailey\'s Potato Farm', '8159 Main Street', '(705) 435-5764');
var rvTentRentals = new Location('44.194520', '-79.942027', 'RV There Yet Tent Trailer Rentals', '6218 County Rd 13','(705) 434-9964', 'https://www.rvthereyettrailerrentals.com', ['9AM-5PM', '9AM-5PM', '9AM-5PM', '9AM-5PM', '9AM-5PM', '9AM-5PM', 'Closed']);
var royalLegion = new Location('44.193604', '-79.941640', 'Royal Canadian Legion Branch 508', '6190 County Rd 13', '(705) 435-5769', 'everettlegion.ca');
var fireStation = new Location('44.195566', '-79.942198', 'Adjala-Tosorontio Township Fire Station 1', '6234 County Rd 13', '(705) 434-5055');
var convenienceStore = new Location('44.191291', '-79.938367', 'Everett Variety & Snack', '8097 Main Street', '(705) 435-9616', '', ['6AM-10PM', '6AM-10PM', '6AM-10PM', '6AM-10PM', '6AM-10PM', '7AM-10PM', '8AM-10PM',]);
var pizzaPlace = new Location('44.191493', '-79.936733', 'Pizza Express', '8069 Main Street', '(705) 250-2016', 'https://www.facebook.com/PizzaExpressEverett/', ['Closed', 'Closed', '4PM-8PM', '4PM-8PM', '4PM-8PM', '4PM-8PM', '4PM-8PM']);
var moneyGram = new Location('44.191457', '-79.936608', 'MoneyGram', '8069 Main Street', '(705) 435-4537', 'moneygram.ca', ['8:30AM-5PM', '8:30AM-5PM', '8:30AM-5PM', '8:30AM-5PM', '8:30AM-5PM', '9AM-12PM', '24HRS']); 
var postOffice = new Location('44.191523', '-79.936581', 'Everett Post Office', '8069 Main Street', '(705) 435-4537', '', ['8:30AM-5PM', '8:30AM-5PM', '8:30AM-5PM', '8:30AM-5PM', '8:30AM-5PM','9AM-12AM', '9AM-12AM']);
var church = new Location('44.189507', '-79.940230', 'Saint David/s Anglican Church & Cemetery', '6095 County Rd 13');
var huntClub = new Location('44.202981', '-79.960866', 'Slovenian Hunters & Anglers Club', '6436 Concession Rd 4', '(705) 435-6992', 'lovska.com', ['10AM-7PM', '10AM-7PM', '10AM-7PM', '10AM-7PM', '10AM-7PM', '10AM-7PM', '10AM-7PM']);
var furnitureShop = new Location('44.206402', '-79.953986', 'Norbert Visser\'s Furniture Restoration And Finishing Shop', '29 Forest Hill Dr', '(705) 434-0586');


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