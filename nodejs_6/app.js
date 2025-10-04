const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require("./routes/authRoute")
const categoryRouter = require("./routes/cateogryRoute")
const productRouter = require("./routes/productRoute")
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDocs = swaggerJSDoc({
   definition: {
    openapi: '3.0.0',
    info: {
      title: 'iti first time expressjs',
      version: '1.0.0',
      description: 'i love swagger ui',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./app.js','./routes/*.js']
});


dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use('/api-document', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.set("view engine", "hbs")
app.set("views", "./views")

app.use('/category', categoryRouter)
app.use('/product', productRouter)
app.use(authRoute)

mongoose.connect(process.env.DB_URL)
  .then(()=> console.log('DB Started'))
  .catch(()=> console.log('something went wrong'))

/**
 * @openapi
 * /{file}:
 *   get:
 *     summary: Get a file from the pubplic folder
 *     responses:
 *       200:
 *         description: return the acessed file
 */
app.get('/register', (req, res) => {
  res.sendFile(__dirname+'/public/register.html')
})
app.listen(process.env.PORT, ()=> {
  console.log('Server Started')
})
