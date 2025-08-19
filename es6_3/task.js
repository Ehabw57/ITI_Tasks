//task1
console.log('==================task1===================')
const f1 = () => fetch('https://jsonplaceholder.typicode.com/users')
const f2 = () =>fetch('https://jsonplaceholder.typicode.com/posts')
const f3 = () => fetch('https://jsonplaceholder.typicode.com/comments')

//Promise.all([f1(), f2(), f3()])
//.then((reses) => {
	//for (const res of reses) {
		//res.json().then((data) => console.log(data.length))
	//}
//})

//task2
console.log('==================task2===================')
const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 4, 7, 8, 5];
let mySet = new Set(numbers)
console.log('mySet Size', mySet.size)
console.log('Number 5 in the set ?', mySet.has(5) ? 'yes' : 'no')
mySet.delete(2)
mySet = [...mySet]
mySet.forEach((num, i) => console.log(`Value of set at ${i}:`, num))

// task3
console.log('==================task3===================')
const myMap = new Map([["India", "New Delhi"], ["France" , "Paris"], ["Japan" , "Tokyo"]])
console.log(myMap.get('France'))
myMap.set( "Germany","Berlin")
console.log('Dose myMap has Japapn?', myMap.has('Japan') ? 'yes' : 'no')

for (const [key,value] of myMap) {
	console.log(`${key} => ${value}`)
}

//task4
console.log('==================task4===================')
class Animal {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
	}

	makeSound() {
		console.log(`${this.constructor.name} ${this.name} makes ${this.sound} sound `)
	}
}

class Dog extends Animal {

	bark() {
		console.log('name =', this.name, 'sound = ', this.sound)
	}
}

const animal1 = new Animal('cat', 'meow')
const dog1 = new Dog('Buddy', 'woff')
console.log('my dog', dog1)
animal1.makeSound()
dog1.makeSound()
dog1.bark()

//task 5 refer to index.html

