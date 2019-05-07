const router = require('express').Router()
const User = require('../models/users')

// Find the id of the user
router.param('user', function (req, res, next, id) {
  Product.find({ _id : id }, (err, user) => {
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
router.get('/profile', (req, res, next) => {
  User
    .exec((err, products) => {
      if (err) {
        return next (err)
      } else {
          res.send(user)
        }
    })
});

// Post user profile information (new user)

// Put user profile information (update user)

// Get all items in user's cart

// Post a product to user's cart

// Delete item from cart

module.exports = router