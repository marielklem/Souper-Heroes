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
router.get('/shop', (req, res, next) => {
  const catQuery = req.query.category;
  //empty category query, if there is a category sent, set to new query
  let categoryQuery = {}
  if (catQuery) {
    const category = (catQuery[0].toUpperCase()) + catQuery.slice(1)
    categoryQuery = {category: category}
  }
  Product
    .find(categoryQuery)
    .skip((perPage * page) - perPage)
    .exec((err, products) => {
      Product.countDocuments().then((count) => {
        if (err) {
          return next (err)
        } else {
          res.send(products)
        }
      })
    })
});

// post a single product (for admin to update inventory quantity)
router.post('/inventory', (req, res) => {
  let newProduct = new Product({
    category : req.body.category,
    name: req.body.name,
    quantity: req.body.quantity,
    image: req.body.image,
    reviews: []
  })
  newProduct.save()

  res.send(`The following product was successfully added: ${newProduct}`)
})

// post products (for admin to add new inventory)

// get all categories