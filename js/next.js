"use strict";
(function () {
    console.log("!!!!");

    function Button(text) {
        this.text = text || "Hello";
    }

    Button.prototype = {
        create: function () {
            var self = this;
            this.element = document.createElement("button");
            this.element.innerText = this.text;
            this.element.addEventListener("click", function () {
                alert(self.text);
            });
            document.body.appendChild(this.element);
        },

        show: function () {
            console.log("wow " + this.text);
        }
    };

    var btn1 = new Button("Hello!");
    btn1.create();
    btn1.show();
})();