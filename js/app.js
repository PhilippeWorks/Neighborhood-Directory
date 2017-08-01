var map;
var markers = [];

function initMap() {

  var everett = {
  	lat: 44.193342, 
  	lng: -79.934449
  };

  map = new google.maps.Map(document.getElementById('map'), {
  	center: everett,
  	zoom: 15,
  	mapTypeControl: false
  });

}

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

      if (hours != undefined) {
        this.hours = {
          monday: hours[0],
          tuesday: hours[1],
          wednesday: hours[2],
          thursday: hours[3],
          friday: hours[4],
          saturday: hours[5],
          sunday: hours[6]
          };
        }
        locations.push(this);
  };
};

  var locations = [];

  //Location(latitude, longitude, title, address, phone, website, hours)
  var baileysFarm = new Location("44.189938", "-79.944931", "Bailey\"s Potato Farm", "8159 Main Street", "(705) 435-5764");
  var rvTentRentals = new Location("44.194520", "-79.942027", "RV There Yet Tent Trailer Rentals", "6218 County Rd 13","(705) 434-9964", "https://www.rvthereyettrailerrentals.com", ["9AM-5PM", "9AM-5PM", "9AM-5PM", "9AM-5PM", "9AM-5PM", "9AM-5PM", "Closed"]);
  var royalLegion = new Location("44.193604", "-79.941640", "Royal Canadian Legion Branch 508", "6190 County Rd 13", "(705) 435-5769", "everettlegion.ca");
  var fireStation = new Location("44.195566", "-79.942198", "Adjala-Tosorontio Township Fire Station 1", "6234 County Rd 13", "(705) 434-5055");
  var convenienceStore = new Location("44.191291", "-79.938367", "Everett Variety & Snack", "8097 Main Street", "(705) 435-9616", "", ["6AM-10PM", "6AM-10PM", "6AM-10PM", "6AM-10PM", "6AM-10PM", "7AM-10PM", "8AM-10PM",]);
  var pizzaPlace = new Location("44.191493", "-79.936733", "Pizza Express", "8069 Main Street", "(705) 250-2016", "https://www.facebook.com/PizzaExpressEverett/", ["Closed", "Closed", "4PM-8PM", "4PM-8PM", "4PM-8PM", "4PM-8PM", "4PM-8PM"]);
  var moneyGram = new Location("44.191457", "-79.936608", "MoneyGram", "8069 Main Street", "(705) 435-4537", "moneygram.ca", ["8:30AM-5PM", "8:30AM-5PM", "8:30AM-5PM", "8:30AM-5PM", "8:30AM-5PM", "9AM-12PM", "24HRS"]); 
  var postOffice = new Location("44.191523", "-79.936581", "Everett Post Office", "8069 Main Street", "(705) 435-4537", "", ["8:30AM-5PM", "8:30AM-5PM", "8:30AM-5PM", "8:30AM-5PM", "8:30AM-5PM","9AM-12AM", "9AM-12AM"]);
  var church = new Location("44.189507", "-79.940230", "Saint David/s Anglican Church & Cemetery", "6095 County Rd 13");
  var huntClub = new Location("44.202981", "-79.960866", "Slovenian Hunters & Anglers Club", "6436 Concession Rd 4", "(705) 435-6992", "lovska.com", ["10AM-7PM", "10AM-7PM", "10AM-7PM", "10AM-7PM", "10AM-7PM", "10AM-7PM", "10AM-7PM"]);
  var furnitureShop = new Location("44.206402", "-79.953986", "Norbert Visser\"s Furniture Restoration And Finishing Shop", "29 Forest Hill Dr", "(705) 434-0586");