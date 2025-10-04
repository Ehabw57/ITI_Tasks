const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require("./routes/authRoute")
const categoryRouter = require("./routes/cateogryRoute")
const productRouter = require("./routes/productRoute")

dotenv.config()

const app = express()
app.use(express.json())

app.set("view engine", "hbs")
app.set("views", "./views")

app.use('/category', categoryRouter)
app.use('/product', productRouter)
app.use(authRoute)

mongoose.connect(process.env.DB_URL)
  .then(()=> console.log('DB Started'))
  .catch(()=> console.log('something went wrong'))

app.listen(process.env.PORT, ()=> {
  console.log('Server Started')
})
