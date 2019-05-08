const router = require('express').Router()
const User = require('../models/users')

// Find the id of the user
router.param('user', function (req, res, next, id) {
  User.find({ _id : id }, (err, user) => {
    if (err) {
      res.status(404).send("Sorry, that user cannot be found")
    }
    req.user = user[0]
    next();
  })
})

// Post login (/login)


// Logout (/logout)

// Get user profile information (intake form)
router.get('/:user', (req, res, next) => {
  res.send(req.user)
});

// Post user profile information (new user)
router.post('/newUser', (req, res) => {
  let newUser = new User ({
    name: req.body.name,
    email: req.body.email,
    image: req.body.imgUrl,
    location: req.body.address,
    demographics: req.body.demographics
  })
  newUser.save()
  res.send(`Welcome to Souper Heroes, ${req.body.name}!`)

})

// Put user profile information (update user)

// Get all items in user's cart
router.get('/:user/cart', (req, res) => {
  res.send(req.user.cart)
})

// Put a product to user's cart
router.put('/:user/cart', (req, res) => {
  const newCart = req.body.cart
  User.findByIdAndUpdate(
    req.params.user, 
    {cart : newCart}, 
    (err, user) => {
    if(err) throw err;
  })
  res.send(req.user)
})

// Delete item from cart

module.exports = router