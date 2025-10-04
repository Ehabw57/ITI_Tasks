var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//a.types
var str = "Hello";
var num = 4;
var bool = false;
//b.union
var x = 3;
x = "hello";
//c.function
function SayHello() {
    console.log("sayHello");
}
function sum(a, b) {
    return a + b;
}
//d.enum
var roles;
(function (roles) {
    roles["ADMIN"] = "admin";
    roles["USER"] = "user";
})(roles || (roles = {}));
var admin = roles.ADMIN;
var user1 = {
    name: "ehab",
    age: 25,
    id: 1,
};
var std1 = __assign(__assign({}, user1), { grade: "A+" });
//e.interface imlemenets a class
var User = /** @class */ (function () {
    function User(id, age, name) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return User;
}());
// e.simpler syntax
var User1 = /** @class */ (function () {
    function User1(id, age, name) {
        this.id = id;
        this.age = age;
        this.name = name;
    }
    return User1;
}());
//f.generic
function identity(value) {
    return value;
}
var number1 = identity(34);
var string1 = identity("hello");
var CheesePizza = /** @class */ (function () {
    function CheesePizza(name, description) {
        this.name = name;
        this.description = description;
    }
    CheesePizza.prototype.showDesc = function () {
        return "".concat(this.name, ": ").concat(this.description);
    };
    return CheesePizza;
}());
var PizzaDecorator = /** @class */ (function () {
    function PizzaDecorator(pizza) {
        this.pizza = pizza;
    }
    PizzaDecorator.prototype.showDesc = function () {
        return this.pizza.showDesc() + " and extra Cheese";
    };
    return PizzaDecorator;
}());
var pizza = new CheesePizza('cheese piza', 'tasty pizza with tomatos and cheese');
var extraPizza = new PizzaDecorator(pizza);
console.log(pizza.showDesc());
console.log(extraPizza.showDesc());
//h.modules
//==================
