const express = require('express');
const router = express.Router();
const file = './users.json';
const fs = require('fs')

function getProducts() {
  const data = fs.readFileSync(file,'utf-8')
  return data.trim().length ? JSON.parse(data) : []
}

function saveProducts(products) {
  fs.writeFileSync(file, JSON.stringify(products, null, 2))
}

router.get('/', (_, res)=> {
  const products = getProducts()
  products.length ? res.json(products) : res.send('sorry no products Found\n')
})

router.get('/:id', (req,res) => {
  const target = getProducts().find((item) => item.id == req.params.id)
  target ? res.json(target) : res.send("sorry Target coun'nt be found\n")
})

router.post('/', (req, res) => {
  const products = getProducts()
  const newProduct = {id: products.length + 1, name: req.body.name, price: req.body.price}
  products.push(newProduct)
  saveProducts(products)
  res.json(newProduct)
})

router.delete('/:id', (req, res) => {
  const products = getProducts()
  const updatedProducts = products.filter((prod) => prod.id != req.params.id)
  if (updatedProducts.length < products.length) {
    saveProducts(updatedProducts)
    res.send(`removed products at ${req.params.id}\n`)
  } else
    res.send('sorry product did not found \n')
})

router.patch('/:id', (req, res) => {
  const newData = {name:req.body.name, price:req.body.price}
  const products = getProducts()
  const targetIndex = products.findIndex((prod) => prod.id == req.params.id)
  if(targetIndex < 0) {
    res.send('Product not found')
  }else {
    products[targetIndex].price = newData.price
    products[targetIndex].name = newData.name
    saveProducts(products)
    res.send(`products update #id: ${req.params.id}`)
  }
})

module.exports = router
