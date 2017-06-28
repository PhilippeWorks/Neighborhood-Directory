var map;

var model = {
	currentPosition: null,
	places: [
		{
			name: 'Bailey\'s Potato Farm', 
			address: '8159 Main Street Everett, Everett, ON L0M 1J0', phone: '(705) 435-5764', 
			img: '', 
			position: {lat: 44.1899357, lng: -79.9460162}
		},
		{
			name: 'RV There Yet Tent Trailer Rentals', 
			address: '6218 County Rd 13, Everett, ON L0M 1J0', phone: '(705) 434-9964', 
			website: 'https://www.rvthereyettrailerrentals.com', 
			img: '', 
			position: {lat: 44.1928181, lng: -79.944487}
		},
		{
			name: 'Royal Canadian Legion Branch 508', 
			address: '6190 County Rd 13, Everett, ON L0M 1J0', 
			phone: '705 435-5769', 
			website: 'everettlegion.ca', 
			img: '', 
			position: {lat: 44.1894557, lng: -79.9454385}
		},
		{
			name: 'Bailey\'s Potato Farm' , 
			phone: '705 435-5764', 
			img: '', 
			position: {lat: 44.1894557, lng: -79.9454385}
		},
		{
			name: 'Bailey\'s Potato Farm', 
			address: '8159 Main Street Everett, Everett, ON L0M 1J0', 
			phone: '(705) 435-5764', 
			img: '', 
			position: {lat: 44.1899357, lng: -79.9460162}
		},
		{
			name: 'Bailey\'s Potato Farm', 
			address: '8159 Main Street Everett, Everett, ON L0M 1J0', 
			phone: '(705) 435-5764', 
			img: '', 
			position: {lat: 44.1899357, lng: -79.9460162}
		},
		{
			name: 'Bailey\'s Potato Farm', 
			address: '8159 Main Street Everett, Everett, ON L0M 1J0', 
			phone: '(705) 435-5764', 
			img: '', 
			position: {lat: 44.1899357, lng: -79.9460162}
		}
		]

}
var everett = {lat: 44.193342, lng: -79.934449};

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: everett,
		zoom: 15
	});
	var marker = new google.maps.Marker({
		position: everett,
		map: map
	});
}