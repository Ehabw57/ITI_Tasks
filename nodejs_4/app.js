const express = require('express')
const mongoose = require('mongoose')
const categoryRouter = require('./routes/cateogryRoute')
const productRouter = require('./routes/productRoute')
const app = express()

app.use(express.json())
app.use('/category', categoryRouter)
app.use('/product', productRouter)

mongoose.connect('mongodb://127.0.0.1:27017/productCate')
  .then(()=> console.log('DB Started'))
  .catch(()=> console.log('something went wrong'))

app.listen(3000, ()=> {
  console.log('Server Started')
})
