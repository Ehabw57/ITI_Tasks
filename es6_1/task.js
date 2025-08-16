//task1
const user = {
	firstName: "Ahmed",
	lastName: "Elsayeh",
	age: 25,
	country: "Egypt"
};

const {firstName:surName, age: a} = user
console.log(surName, a)

//task2
let city1 = "Cairo";
let city2 = "Alexandria";
let num1 = 10;
let num2 = 20;
let color1 = "Red";
let color2 = "Blue";

// console.log(city1, city2, color1, color2, num1, num2)
// [city1, city2] = [city2, city1]  
// [num1, num2] = [num2, num1] 
// [color1, color2] = [color2, color1] 
// [city1, city2, num1, num2, color1, color2] = [city2, city1, num2, num1, color2, color1]
// console.log(city1, city2, color1, color2, num1, num2)

//task3
const electronics = ["Laptop", "Phone", "Tablet"];
const accessories = ["Headphones", "Charger", "Power Bank"];
const allProducts = [...electronics, ...accessories, "smartWatch"]
console.log(allProducts)

//task4
const products = [
  { id: 1, name: "Laptop", price: 1500, category: "Electronics", stock: { inStock: true, quantity: 7 } },
  { id: 2, name: "Phone", price: 800, category: "Electronics", stock: { inStock: false, quantity: 0 } },
  { id: 3, name: "Book", price: 20, category: "Stationery", stock: { inStock: true, quantity: 32 } },
  { id: 4, name: "Pen", price: 5, category: "Stationery", stock: { inStock: true, quantity: 120 } },
  { id: 5, name: "Headphones", price: 200, category: "Electronics", stock: { inStock: false, quantity: 0 } }
];

//1
const {name, price, stock:{quantity}} = products[0]
console.log(name, price, quantity)

//5
products.forEach((product)=>{ product.stock.quantity < 10 ? console.log(product) : null})

//6
const index = products.findIndex(({name})=> name == 'Pen')
products[index].price = 10
console.log(products[index])

//8
console.log(products.every(({stock:{quantity}})=> quantity >= 0))

//9
console.log(products.some(({category, stock:{inStock}})=> category == 'Stationery' && !inStock ))

//10
console.log(products.map(({name, price})=> `${name} - ${price}`))

//11
products.sort((a, b)=> a.category == b.category ? b.price - a.price : b.category.localeCompare(a.category))
console.log(products)






