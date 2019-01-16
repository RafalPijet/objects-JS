"use strict";
(function () {
    function Phone(brand, price, color) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    Phone.prototype.printInfo = function () {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
    }

    var iPhone6s = new Phone("Apple", 2500, "black");
    var galaxyS6 = new Phone("Samsung", 2100, "white");
    var onePlus = new Phone("One Plus", 1800, "gold");
    iPhone6s.printInfo();
    galaxyS6.printInfo();
    onePlus.printInfo();


})();