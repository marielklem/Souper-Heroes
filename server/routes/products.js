const router = require('express').Router()
const Product = require('../models/product')

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
router.get('/', (req, res, next) => {
  Product
  .find({}, (err, inventory) => {
    res.send(inventory)
  })
})

// post a single product (for admin to update inventory quantity)
router.put('/', (req, res) => {

  Product
    .updateOne({quantity : req.body.quantity})

  res.send(`The following product was successfully added: ${newProduct}`)
})

// post products (for admin to add new inventory)
router.post('/', (req, res) => {
  let newProduct = new Product({
    category : req.body.category,
    name: req.body.name,
    quantity: req.body.quantity,
    image: req.body.image,
  })
  newProduct.save()

  res.send(`The following product was successfully added: ${newProduct}`)
})

// get all categories
router.get('/categories', (req, res, next) => {
  Product
    .find({

    })

});

module.exports = router