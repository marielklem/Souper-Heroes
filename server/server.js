const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');

mongoose.connect('mongodb://localhost/souper-heros', {
  useNewUrlParser: true
})

const app = express()

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const productRoutes = require('./routes/products')
const categoryRoutes = require('./routes/categories')
const userRoutes = require('./routes/users')
const orderRoutes = require('./routes/orders')

app.use('/products', productRoutes)
app.use('/profile', userRoutes)
app.use('/categories', categoryRoutes)
app.use('/orders', orderRoutes)

app.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000)
})