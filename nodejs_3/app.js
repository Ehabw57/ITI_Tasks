const express = require('express')
const app = express()
const productsRoute = require('./routes/products')

app.use(express.json())
app.use((req, res, next)=> {
  console.log('middleWare Run Succesfully')
  next();
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('sorry something went worg');
});

app.use('/products', productsRoute)

app.listen(3000, () => console.log('server Started'))
