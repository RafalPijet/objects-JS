'use strict';
(function () {
    function Car(brand, model, color, price) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
    }

    Car.prototype.showInfo = function () {
        console.log("Brand: " + this.brand.toUpperCase() + ", Model: " + this.model + ", Color: "
            + this.color + ", Price: " + this.price + "$");
    };

    const Bmw = new Car("Bmw", "520", "black", 38000);
    const Audi = new Car("Audi", "A6", "white", 28000);
    Bmw.showInfo();
    Audi.showInfo();
})();
