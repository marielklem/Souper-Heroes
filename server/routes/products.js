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

// GET all products ()
router.get('/', (req, res, next) => {
  Product
  .find({}, (err, inventory) => {
    res.send(inventory)
  })
})

//PUT product (update quantity available)
router.put('/:id', (req, res) => {
  var newQuantity = req.body.limit

  Product.findByIdAndUpdate(
    req.params.id, 
    { quantity : newQuantity}, 
    (err, product) => {
      if (err) throw err;
      else console.log(product)
    })
  res.send(`The ${req.product.name} was successfully updated`)
})

// POST products (for admin to add new inventory)
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

module.exports = router