//task 1
class Ceo{
	constructor(name, age) {
		if (Ceo.instance){
			return Ceo.instance
		} else {
		this.name = name;
		this.age = age;
		Ceo.instance = this;
		}
	}
}

console.log('========================task1===========================')
console.log(new Ceo("Ahmed", 44))
console.log(new Ceo("Khaled", 33))

//task2
class Car {
	constructor(model, color) {
		this.model = model
		this.color = color;
	}
}

class Bmw extends Car{
	constructor(color) {
		super("Bmw", color)
	}
	fix() {
		return `fixing a ${this.color} Bmw `
	}
}

class Marceedes extends Car{
	constructor(color) {
		super("Marceedes", color)
	}
	fix() {
		return `fixing a ${this.color} Merceedes `
	}
}

class Toyota extends Car{
	constructor(color) {
		super("Toyota", color)
	}
	fix() {
		return `fixing a ${this.color} Toyota `
	}
}
	

class CarsFactory {
	constructor(model, color) {
		this.model = model;
		this.color = color;
	}
	createCar() {
		switch (this.model) {
			case 'Bmw':
				return new Bmw(this.color);
			case 'Toyota':
				return new Toyota(this.color);
			case 'Marceedes':
				return new Marceedes(this.color);
			default:
				throw('sorry this car mdoel is not in out fixable list')
		}
	}
}

console.log('========================task2===========================')
console.log(new CarsFactory('Bmw', 'yellow').createCar())
console.log(new CarsFactory('Toyota', 'Black').createCar())


//task3
class Toy {
	constructor(obj) {
		Object.assign(this, obj)
	}
}

class ToyBuilder {
	constructor(color, price){
		this.color = color;
		this.price = price;
	}

	ToyDuck() {
		return this
	}

	ToyCar(name) {
		this.name = name;
		return this
	}

	build() {
		return new Toy(this)
	}
}

console.log('========================task3===========================')
console.log(new ToyBuilder('blue', 300).ToyCar('Racer').build())
console.log(new ToyBuilder('blue', 300).ToyDuck().build())

//task4
class ConfigureVals{
	constructor(xpoint=0, ypoint=0, shape=null) {
		if (!ConfigureVals.fInstance || ConfigureVals.defaultValues()){
		this.xpoint = xpoint;
		this.ypoint = ypoint;
		this.shape = shape;
		ConfigureVals.fInstance = this;
		} else {
			return ConfigureVals.fInstance
		}
	}

	static defaultValues() {
		return (!ConfigureVals.fInstance.xpoint && !ConfigureVals.fInstance.ypoint && !ConfigureVals.fInstance.shape)
	}
}
console.log('========================task4===========================')
console.log(new ConfigureVals())
console.log(new ConfigureVals(12, 30, 'circle'))
console.log(new ConfigureVals(2, 8, 'square'))


//task 5
class SuperHero {
	constructor(obj) {
		Object.assign(this, obj)
	}
}

class SuperHeroBulider {
	constructor(name, flying=false, laserBeams=false, superSpeed=false) {
		this.name = name;
		this.rating = 2;
		this.flying = flying;
		this.laserBeams = laserBeams;
		this.superSpeed = superSpeed;
	}
	
	canFly() {
		this.flying = true;
		this.rating += 1;
		return this;
	}

	hasLaserBeams() {
		this.laserBeams = true;
		this.rating += 1
		return this;
	}
	hasSuperSpeed() {
		this.superSpeed = true;
		this.rating += 1
		return this;
	}

	buildHero() {
		return new SuperHero(this)
	}
}


console.log('========================task5===========================')
console.log(new SuperHeroBulider('Batman').buildHero())
console.log(new SuperHeroBulider('The flash').hasSuperSpeed().buildHero())
console.log(new SuperHeroBulider('Invincible').canFly().hasSuperSpeed().buildHero())
console.log(new SuperHeroBulider('Superman').canFly().hasLaserBeams().hasSuperSpeed().buildHero())

//task6
class Labtop {
	constructor(cpu, ram, disk){
		this.cpu = cpu;
		this.ram = ram;
		this.disk = disk
	}
}

class Cpu {
	constructor(name, cores, threads){
		this.name = name;
		this.cores = cores;
		this.threads = threads;
	}
}

class Ram {
	constructor(frequancy, size) {
		this.frequancy = frequancy;
		this.size = size
	}
}

class Disk {
	constructor(type, size) {
		this.type = type;
		this.size = size
	}
}

console.log('========================task6===========================')
const cpu1 = new Cpu('Inter core i7 8th', 4, 8)
const ram1 = new Ram('DDR3', 8)
const disk1 = new Disk('SSD', 256)
console.log(new Labtop(cpu1, ram1, disk1))


//task7
class School {
}

class Teacher{
	teachLesson() {
	}
}

class Student {
	study(){
	}
}

class houskeeper{
	cleanFloor(){
	}
}


//task8
class Shape {
	constructor(name){
		this.name = name;
	}
}

class Cricle extends Shape {
	constructor(r) {
		super('circle')
		this.r = r;
	}
	clacArea() {
		return Math.PI * r**2;
	}
}

class Square extends Shape{
	constructor(l) {
		super('squrae')
		this.length = l;
	}
	clacArea() {
		return l * 4;
	}
}


