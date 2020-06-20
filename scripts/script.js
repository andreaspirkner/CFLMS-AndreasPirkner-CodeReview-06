var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locations = /** @class */ (function () {
    function locations(name, city, zipcode, address, image) {
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.image = image;
    }
    locations.prototype.render = function () {
        return "";
    };
    return locations;
}());
var places = /** @class */ (function (_super) {
    __extends(places, _super);
    function places(name, city, zipcode, address, image) {
        return _super.call(this, name, city, zipcode, address, image) || this;
    }
    places.prototype.render = function () {
        return "\n\t\t" + _super.prototype.render.call(this) + "\n        \n            <div class=\"box border border-dark\">\n                    <a href=\"#\">\n                    <img class=\"media-object d-sm-none d-md-block\" src=\"" + this.image + "\">\n                    </a>\n                    <h4>" + this.name + "</h4>\n                    <p><b>City:</b> " + this.city + "</p>\n                    <p><b>ZIP-Code:</b> " + this.zipcode + "</p>\n                    <p><b>Address:</b> <br>" + this.address + "</p>\n            </div><!--END BOX-->\n    \n\t\t";
    };
    return places;
}(locations));
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(name, city, zipcode, address, image, phone, type, homepage) {
        var _this = _super.call(this, name, city, zipcode, address, image, phone, type, homepage) || this;
        _this.phone = phone;
        _this.type = type;
        _this.homepage = homepage;
        return _this;
    }
    restaurant.prototype.render = function () {
        return "\n\t\t" + _super.prototype.render.call(this) + "\n    \n            <div class=\"box border border-dark\">\n                    <a href=\"" + this.homepage + "\">\n                    <img class=\"media-object d-sm-none d-md-block\" src=\"" + this.image + "\" alt=\"...\">\n                    </a>\n                    <h4>" + this.name + "</h4>\n                    <p><b>City:</b> " + this.city + "</p>\n                    <p><b>ZIP-Code:</b> " + this.zipcode + "</p>\n                    <p><b>Address:</b> <br>" + this.address + "</p>\n                    <p><b>Tel.:</b>" + this.phone + "</p>\n                    <p><b>Type: </b>" + this.type + "</p>\n                    <p><b>Website: </b><a href=\"" + this.homepage + "\">" + this.name + "</a></p>\n            </div><!--END BOX-->\n    \n\t\t";
    };
    return restaurant;
}(locations));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(name, city, zipcode, address, image, date, price) {
        var _this = _super.call(this, name, city, zipcode, address, image, date, price) || this;
        _this.date = date;
        _this.price = price;
        return _this;
    }
    events.prototype.render = function () {
        return "\n\t\t" + _super.prototype.render.call(this) + "\n        \n            <div class=\"box border border-dark\">\n                    <a href=\"#\">\n                    <img class=\"media-object d-sm-none d-md-block\" src=\"" + this.image + "\" alt=\"...\">\n                    </a>\n                    <h4>" + this.name + "</h4>\n                    <p><b>City:</b> " + this.city + "</p>\n                    <p><b>ZIP-Code:</b> " + this.zipcode + "</p>\n                    <p><b>Address:</b> <br>" + this.address + "</p>\n                    <p><b>Date:</b> " + this.date + "</p>\n                    <p><b>Price:</b> C $ " + this.price + "</p>\n            </div><!--END BOX-->\n    \n\t\t";
    };
    return events;
}(locations));
var placesData = new Array();
placesData[0] = new places("CN Tower", "Toronto", "M5V3L9", "290 Bremner Boulevard", "img/cn_tower.jpg");
placesData[1] = new places("Hockey Hall of Fame", "Toronto", "M5E1X8", "30 Yonge Street", "img/hall_of_fame.jpg");
placesData[2] = new places("Royal Ontario Museum", "Toronto", "M5S2C6", "100 Queen's Park", "img/ontario_museum.jpg");
var restaurantData = new Array();
restaurantData[0] = new restaurant("Alo", "Toronto", "M5V2L6", "163 Spadina Ave", "img/alo.png", "+1 416-260-2222", "Modern French Cuisine", "https://alorestaurant.com");
restaurantData[1] = new restaurant("Cibo Wine Bar", "Toronto", "M4P2H5", "2472 Yonge Street", "img/cibo.png", "+1 416-925-0016", "Italian", "http://www.cibowinebar.com");
restaurantData[2] = new restaurant("Richmond Station", "Toronto", "M5H3W4", "1 Richmond Street W", "img/richmond.png", "+1 647-748-1444", "Canadian", "https://richmondstation.ca");
var eventData = new Array();
eventData[0] = new events("Toronto's Beer Festival", "Toronto", "M6K3C3", "Bandshell Park, Exhibition Place", "img/beer.png", "July 26 to 28, 2020", "Free");
eventData[1] = new events("Carebbean Festival", "Toronto", "M4B1Y2", "19 Waterman Ave", "img/carebbean.png", "July 3 to August 3, 2020", "Free");
eventData[2] = new events("Halloween in Toronto", "Toronto", "Everywhere", "Get spooky in town", "img/halloween.png", "October 31, 2020", "Free");
function drawContentPlaces() {
    for (var index in placesData) {
        document.getElementById("places").innerHTML += placesData[index].render();
    }
}
function drawContentRestaurants() {
    for (var index in restaurantData) {
        document.getElementById("restaurants").innerHTML += restaurantData[index].render();
    }
}
function drawContentEvents() {
    for (var index in eventData) {
        document.getElementById("events").innerHTML += eventData[index].render();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    drawContentPlaces();
    drawContentRestaurants();
    drawContentEvents();
});
