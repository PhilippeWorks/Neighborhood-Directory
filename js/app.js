let map;
let navCard;
let position;
const sideBar = document.getElementById("locations");

//google map API function
function initMap() {
  let everett = {
  	lat: 44.193342, 
  	lng: -79.934449
  };

  map = new google.maps.Map(document.getElementById('map'), {
  	center: everett,
  	zoom: 15,
  	mapTypeControl: false,
    mapTypeId: "hybrid",
    styles: [
      {
      "featureType": "poi",
      "stylers": [{"visibility": "off"}]
      }
    ]

  });

  //class to build each location in Everett
  class Location {
    constructor (latitude, longitude, title, address, phone, website, hours) {
      this.position = {
        lat: Number(latitude), 
        lng: Number(longitude)
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
        };

      this.marker = new google.maps.Marker({
        position: this.position,
        map: map,
        title: this.title
      });

      this.marker.addListener("click", () => {
          this.navCard.style.backgroundColor = "grey";
        }
      );

      //adds location info to sidebar
      this.navCard = document.createElement("div");
      sideBar.appendChild(this.navCard);

      this.nameCard = document.createElement("h3");
      this.nameCard.innerHTML = this.title;
      this.navCard.appendChild(this.nameCard);


      this.infoSection = document.createElement("ul");
      this.navCard.appendChild(this.infoSection);

      this.addressInfo = document.createElement("li");
      this.addressInfo.innerHTML = this.address;
      this.infoSection.appendChild(this.addressInfo);



      if (this.phone != undefined) {
        this.phoneElement =  document.createElement("li")
        this.phoneElement.innerHTML = this.phone;
        this.infoSection.appendChild(this.phoneElement);
        };

      if (this.website != undefined) {
        this.websiteInfo = document.createElement("li");
        this.websiteElement = document.createElement("a");
        this.websiteElement.setAttribute("href", this.website);
        this.websiteElement.innerHTML = this.website;
        this.websiteInfo.appendChild(this.websiteElement);
        this.infoSection.appendChild(this.websiteInfo);
      };

      if(this.hours != undefined) {
        this.hoursElement = document.createElement("li");
          Object.entries(this.hours).forEach( ([key, value]) => {
          this.hoursElement.innerHTML += " -> " + key + ": " + value + "<br>";
        });
        this.infoSection.appendChild(this.hoursElement);
      };

    };
  };

  //Location(latitude, longitude, title, address, phone, website, hours)
  //use the keyord undefined where there's no value but it is necessary to reach a relevant property
  let baileysFarm = new Location("44.189938", "-79.944931", "Bailey\'s Potato Farm", "8159 Main Street", "(705) 435-5764");
  let rvTentRentals = new Location("44.194520", "-79.942027", "RV There Yet Tent Trailer Rentals", "6218 County Rd 13","(705) 434-9964", "https://www.rvthereyettrailerrentals.com", ["9AM-5PM", "9AM-5PM", "9AM-5PM", "9AM-5PM", "9AM-5PM", "9AM-5PM", "closed"]);
  let royalLegion = new Location("44.193604", "-79.941640", "Royal Canadian Legion Branch 508", "6190 County Rd 13", "(705) 435-5769", "http://www.everettlegion.ca");
  let fireStation = new Location("44.195566", "-79.942198", "Adjala-Tosorontio Township Fire Station 1", "6234 County Rd 13", "(705) 434-5055");
  let convenienceStore = new Location("44.191291", "-79.938367", "Everett Variety & Snack", "8097 Main Street", "(705) 435-9616", undefined, ["6AM-10PM", "6AM-10PM", "6AM-10PM", "6AM-10PM", "6AM-10PM", "7AM-10PM", "8AM-10PM",]);
  let pizzaPlace = new Location("44.191493", "-79.936733", "Pizza Express", "8069 Main Street", "(705) 250-2016", "https://www.facebook.com/PizzaExpressEverett", ["closed", "closed", "4PM-8PM", "4PM-8PM", "4PM-8PM", "4PM-8PM", "4PM-8PM"]);
  let moneyGram = new Location("44.191457", "-79.936608", "MoneyGram", "8069 Main Street", "(705) 435-4537", "http://www.moneygram.ca", ["8:30AM-5PM", "8:30AM-5PM", "8:30AM-5PM", "8:30AM-5PM", "8:30AM-5PM", "9AM-12PM", "24HRS"]); 
  let postOffice = new Location("44.191523", "-79.936581", "Everett Post Office", "8069 Main Street", "(705) 435-4537", undefined, ["8:30AM-5PM", "8:30AM-5PM", "8:30AM-5PM", "8:30AM-5PM", "8:30AM-5PM","9AM-12AM", "9AM-12AM"]);
  let church = new Location("44.189507", "-79.940230", "Saint David's Anglican Church & Cemetery", "6095 County Rd 13");
  let huntClub = new Location("44.202981", "-79.960866", "Slovenian Hunters & Anglers Club", "6436 Concession Rd 4", "(705) 435-6992", "http://www.lovska.com", ["10AM-7PM", "10AM-7PM", "10AM-7PM", "10AM-7PM", "10AM-7PM", "10AM-7PM", "10AM-7PM"]);
  let furnitureShop = new Location("44.206402", "-79.953986", "Norbert Visser's Furniture Restoration And Finishing Shop", "29 Forest Hill Dr", "(705) 434-0586");
  let somerville = new Location("44.179107", "-79.940632", "Somerville Nurseries Inc", "5884 County Rd 13", "(705) 435-6258", "http://www.krisskringle.com", ["8AM-5PM", "8AM-5PM", "8AM-5PM", "8AM-5PM", "8AM-5PM", "closed", "closed"]);
  let essaEquestrian = new Location("44.182023", "-79.938198", "Essa Equestrian Riding Club", "5947 County Rd 13", "(705) 730-9481", "http://www.essaequestrians.com");
  let billiards = new Location("44.195717", "-79.919240", "Custom Billiards and Shuffleboards", "7800 Country Rd 5", "(705) 435-7026");
};

