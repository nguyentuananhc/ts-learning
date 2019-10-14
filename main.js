"use strict";
function greeter(person) {
    var sayHi = "Hello " + person;
    console.log(sayHi);
}
greeter('tuan anh');
// Type of ts
var a;
var b;
var c;
var d = ['a', 'b', 'c']; // boolean[], number[], any[]
var e; // default type of variable
var f;
var g;
var h; // funcion method
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Yellow"] = "yellow";
})(Color || (Color = {}));
// example for enum
var red = Color.Red;
//custom type ?
// TypeAsertion
var ta;
// ta. show all avaible method in string[]
// Cast
var test = ['ta'];
var eat = function (food) {
    console.log("eat " + food.x + ", " + food.y);
};
var makeFood = function (food) {
};
//Conhesion things related to each other should stay in same place ? => solution use Class
//Class
var Foods = /** @class */ (function () {
    // access modifiers: public, private, protected
    // default access modifiers is public
    function Foods(x, y) {
        var _this = this;
        this.makeFood = function () {
            console.log("make food " + _this.x + ", " + _this.y);
        };
        this.x = x;
        this.y = y;
    }
    return Foods;
}());
var newfood = new Foods('rice', 'meat');
newfood.makeFood();
