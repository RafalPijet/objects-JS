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

    function Button(text) {
        this.text = text || "Hello";
    }

    Button.prototype.create = function () {
        let self = this;
        this.element = document.createElement("button");
        this.element.innerText = this.text;
        document.body.appendChild(this.element);
        this.element.addEventListener("click", function () {
            alert(self.text);
        })
    };
    let btn1 = new Button();
    btn1.create();
    let btn2 = new Button("Wow");
    btn2.create();
})();
