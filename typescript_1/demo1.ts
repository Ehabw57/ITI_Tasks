//a.types
let str: string = "Hello";
let num: number = 4;
let bool: boolean = false;

//b.union
let x: string | number = 3;
x = "hello";

//c.function
function SayHello(): void {
  console.log("sayHello");
}
function sum(a: number, b: number): number {
  return a + b;
}

//d.enum
enum roles {
  ADMIN = "admin",
  USER = "user",
}

let admin = roles.ADMIN;

//e.interface
interface IUser {
  name: string;
  age: number;
  id: number;
}

interface IStudent extends IUser {
  grade: string;
}

let user1: IUser = {
  name: "ehab",
  age: 25,
  id: 1,
};

let std1: IStudent = { ...user1, grade: "A+" };

//e.interface imlemenets a class
class User implements IUser {
  id: number;
  name: string;
  age: number;
  constructor(id: number, age: number, name: string) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

// e.simpler syntax
class User1 implements IUser {
  constructor(
    public id: number,
    public age: number,
    public name: string,
  ) {}
}

//f.generic
function identity<T>(value: T): T {
  return value;
}

let number1:number = identity<number>(34);
let string1:string = identity<string>("hello");

//Decorator concept
interface Pizza {
  showDesc(): string;
}

class CheesePizza implements Pizza {
  constructor(
    public name: string,
    public description: string,
  ) {}

  showDesc(): string {
    return `${this.name}: ${this.description}`;
  }
}

class PizzaDecorator implements Pizza {
  protected pizza: Pizza;

  constructor(pizza: Pizza) {
    this.pizza = pizza;
  }

  showDesc(): string {
    return this.pizza.showDesc() + " and extra Cheese";
  }
}

console.log("=========decorator=========");
let pizza = new CheesePizza(
  "cheese piza",
  "tasty pizza with tomatos and cheese",
);
let extraPizza = new PizzaDecorator(pizza);
console.log(pizza.showDesc());
console.log(extraPizza.showDesc());

//h.modules
console.log("=========modules=========");
import { Cpu } from "./computer";
let cpu1 = new Cpu(4, "5.4hgz");
console.log(cpu1.showDesc());

//2.point2D
class Point2D {
  constructor(
    public x: number,
    public y: number,
  ) {}

  calcDist(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

console.log("=========point2d=========");
let point2d = new Point2D(3, 3);
console.log(point2d.calcDist());

//3.point3D
class Point3D extends Point2D {
  constructor(
    public x: number,
    public y: number,
    public z: number,
  ) {
    super(x, y);
  }

  calcDist(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }
}
console.log("=========point3d=========");
let point3d = new Point3D(4, 4, 4);
console.log(point3d.calcDist());

//4.demo genric class and geniric interface
interface IIUser<T> {
  id: T
}

class User2<T> implements IIUser<T> {
  constructor(public id:T ){}
}


//==================
