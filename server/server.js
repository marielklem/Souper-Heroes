const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const keys = require ('./config/keys');

mongoose.connect(keys.MONGODB_URI, {
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

//Server
const port = process.env.PORT || 5000
const server = http.createServer(app);

//Deployment
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

server.listen(port)
