const router = require('express').Router()
const Product = require('../models/products')


// Find ID of selected product
router.param('product', function (req, res, next, id) {
  Product.find({ _id : id }, (err, prodcut) => {
    if (err) {
      res.status(404).send("Sorry, that product cannot be found")
    }
    req.product = product[0]
    next();
  })
})
// get all products ()

// post a single product (for admin to update inventory quantity)

// post products (for admin to add new inventory)

// get all categories