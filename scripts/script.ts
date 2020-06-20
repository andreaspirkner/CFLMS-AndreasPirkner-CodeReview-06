class locations{
	name : string;
	city : string;
	zipcode : any;
	address : string;
	image : any;

	constructor(name, city, zipcode, address, image){
		this.name = name;
		this.city = city;
		this.zipcode = zipcode;
		this.address = address;
		this.image = image;
	}

	render() { 
		return ``			

	}
}

class places extends locations {

	constructor(name, city, zipcode, address, image){
		super(name, city, zipcode, address, image);
	}
	render(){
		return `
		${super.render()}
        
            <div class="box border border-dark">
                    <a href="#">
                    <img class="media-object d-sm-none d-md-block" src="${this.image}">
                    </a>
                    <h4>${this.name}</h4>
                    <p><b>City:</b> ${this.city}</p>
                    <p><b>ZIP-Code:</b> ${this.zipcode}</p>
                    <p><b>Address:</b> <br>${this.address}</p>
            </div><!--END BOX-->
    
		`
	}
}

class restaurant extends locations{
	phone : string;
	type : string;
	homepage : any;

	constructor(name, city, zipcode, address, image, phone, type, homepage){
		super(name, city, zipcode, address, image, phone, type, homepage);
		this.phone = phone;
		this.type = type;
		this.homepage = homepage;
	}

	render(){
		return `
		${super.render()}
    
            <div class="box border border-dark">
                    <a href="${this.homepage}">
                    <img class="media-object d-sm-none d-md-block" src="${this.image}" alt="...">
                    </a>
                    <h4>${this.name}</h4>
                    <p><b>City:</b> ${this.city}</p>
                    <p><b>ZIP-Code:</b> ${this.zipcode}</p>
                    <p><b>Address:</b> <br>${this.address}</p>
                    <p><b>Tel.:</b>${this.phone}</p>
                    <p><b>Type: </b>${this.type}</p>
                    <p><b>Website: </b><a href="${this.homepage}">${this.name}</a></p>
            </div><!--END BOX-->
    
		`
	}

}

class events extends locations{
	date : string;
	price : any;

	constructor(name, city, zipcode, address, image, date, price){
		super(name, city, zipcode, address, image, date, price);
		this.date = date;
		this.price = price;
	}

	render(){
		return `
		${super.render()}
        
            <div class="box border border-dark">
                    <a href="#">
                    <img class="media-object d-sm-none d-md-block" src="${this.image}" alt="...">
                    </a>
                    <h4>${this.name}</h4>
                    <p><b>City:</b> ${this.city}</p>
                    <p><b>ZIP-Code:</b> ${this.zipcode}</p>
                    <p><b>Address:</b> <br>${this.address}</p>
                    <p><b>Date:</b> ${this.date}</p>
                    <p><b>Price:</b> C $ ${this.price}</p>
            </div><!--END BOX-->
    
		`
	}

}




var placesData = new Array();

placesData[0] = new places("CN Tower", "Toronto",  "M5V3L9", "290 Bremner Boulevard", "img/cn_tower.jpg")
placesData[1] = new places("Hockey Hall of Fame", "Toronto",  "M5E1X8", "30 Yonge Street", "img/hall_of_fame.jpg")
placesData[2] = new places("Royal Ontario Museum", "Toronto",  "M5S2C6", "100 Queen's Park", "img/ontario_museum.jpg")


var restaurantData = new Array();

restaurantData[0] = new restaurant("Alo", "Toronto", "M5V2L6", "163 Spadina Ave", "img/alo.png", "+1 416-260-2222", "Modern French Cuisine", "https://alorestaurant.com")
restaurantData[1] = new restaurant("Cibo Wine Bar", "Toronto", "M4P2H5", "2472 Yonge Street", "img/cibo.png", "+1 416-925-0016", "Italian", "http://www.cibowinebar.com")
restaurantData[2] = new restaurant("Richmond Station", "Toronto", "M5H3W4", "1 Richmond Street W", "img/richmond.png", "+1 647-748-1444", "Canadian", "https://richmondstation.ca")

var eventData = new Array();


eventData[0] = new events("Toronto's Beer Festival", "Toronto", "M6K3C3", "Bandshell Park, Exhibition Place", "img/beer.png", "July 26 to 28, 2020", "Free")
eventData[1] = new events("Carebbean Festival", "Toronto", "M4B1Y2", "19 Waterman Ave", "img/carebbean.png", "July 3 to August 3, 2020", "Free")
eventData[2] = new events("Halloween in Toronto", "Toronto", "Everywhere", "Get spooky in town", "img/halloween.png", "October 31, 2020", "Free")




function drawContentPlaces() {
	for (let index in placesData) {
		document.getElementById("places").innerHTML += placesData[index].render();
	}
}

function drawContentRestaurants() {
	for (let index in restaurantData) {
		document.getElementById("restaurants").innerHTML += restaurantData[index].render();
	}
}

function drawContentEvents() {
	for (let index in eventData) {
		document.getElementById("events").innerHTML += eventData[index].render();
	}
}


document.addEventListener("DOMContentLoaded", function(){
	drawContentPlaces();
	drawContentRestaurants();
	drawContentEvents();

});




