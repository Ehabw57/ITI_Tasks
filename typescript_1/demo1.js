var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
console.log("=========decorator=========");
var pizza = new CheesePizza("cheese piza", "tasty pizza with tomatos and cheese");
var extraPizza = new PizzaDecorator(pizza);
console.log(pizza.showDesc());
console.log(extraPizza.showDesc());
//h.modules
console.log("=========modules=========");
import { Cpu } from "./computer.js";
var cpu1 = new Cpu(4, "5.4hgz");
console.log(cpu1.showDesc());
//2.point2D
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2D.prototype.calcDist = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    return Point2D;
}());
console.log("=========point2d=========");
var point2d = new Point2D(3, 3);
console.log(point2d.calcDist());
//3.point3D
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.x = x;
        _this.y = y;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.calcDist = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    };
    return Point3D;
}(Point2D));
console.log("=========point3d=========");
var point3d = new Point3D(4, 4, 4);
console.log(point3d.calcDist());
var User2 = /** @class */ (function () {
    function User2(id) {
        this.id = id;
    }
    return User2;
}());
//==================
