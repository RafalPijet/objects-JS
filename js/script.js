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

    Phone.prototype.printInfo = function () {
        console.log("Change form of info --> " + this.price + ";" + this.brand + ";" + this.color);
    }

    console.log("\n");
    iPhone6s.printInfo();
    galaxyS6.printInfo();
    onePlus.printInfo();

    function Phone(brand, price, color, incomingMessages, outgoingMessages) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.incomingMessages = incomingMessages;
        this.outgoingMessages = outgoingMessages;
    }

    var inMessages = ["inFirst", "inSecond", "inThird", "inFourth", "inFifth"];
    var outMessages = ["outFirst", "outSecond", "outThird", "outFourth", "outFifth"];
    var iPhone7 = new Phone("Apple", 2800, "pink", inMessages, outMessages);
    console.log("\n");
    iPhone7.printInfo();

    Phone.prototype.showIncomingMessages = function () {

        for (var i = 0; i < this.incomingMessages.length; i++) {
            console.log((i + 1) + ". " + this.incomingMessages[i] + ",");
        }
    }

    Phone.prototype.showOutgoingMessages = function () {

        for (var i = 0; i < this.outgoingMessages.length; i++) {
            console.log((i + 1) + ". " + this.outgoingMessages[i] + ",");
        }
    }

    Phone.prototype.howMuchCost = function (quantity) {
        console.log("Price for " + quantity + " pieces: " + quantity * this.price);
    }

    console.log("\n");
    iPhone7.showIncomingMessages();
    console.log("\n");
    iPhone7.showOutgoingMessages();
    console.log("\n");
    iPhone7.howMuchCost(2);
    iPhone7.howMuchCost(7);

    // var request = new XMLHttpRequest();
    // request.open("GET", "http://api.icndb.com/jokes/random"); //http://api.icndb.com/jokes/random
    // request.onload = function () {
    //
    //     if (request.status == 200) {
    //         console.log(request.response);
    //     } else {
    //         console.log("nothing");
    //     }
    // };
    // request.send();
})();