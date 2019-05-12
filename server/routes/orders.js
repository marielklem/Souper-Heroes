const router = require('express').Router()
const Order = require('../models/orders')

//GET all orders
router.get('/', (req, res, next) => {
  Order
    .find({}, (err, orders) => {
      res.send(orders)
    })
})

//GET all pending orders
router.get('/pending', (req, res, next) => {
  Order
    .find({
      "status": "pending"
    }, (err, orders) => {
      res.send(orders)
    })
})

//POST a new order
router.post('/neworder', (req, res) => {
  let newOrder = new Order({
    name: req.body.name,
    nameId: req.body.user,
    status: 'pending',
    order: req.body.order
  })
  newOrder.save()
  res.send(newOrder)

})

//PUT a specific order (Change from pending to packed)
router.put('/:order', (req, res) => {
  const newStatus = req.body.body.status
  Order.findOneAndUpdate({
      _id: req.params.order
    }, {
      status: newStatus
    }, {
      new: true
    },
    (err, order) => {
      if (err) throw err;
      res.send(order)
    }
  )
})


module.exports = router