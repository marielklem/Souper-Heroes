const router = require('express').Router()
const Category = require('../models/category')


// Find ID of selected category
router.param('category', function (req, res, next, id) {
  Category.find({ _id : id }, (err, category) => {
    if (err) {
      res.status(404).send("Sorry, that product cannot be found")
    }
    console.log(category)
    req.category = category[0]
    next();
  })
})

//get all categories
router.get('/', (req, res, next) => {
  Category
  .find({}, (err, category) => {
    res.send(category)
  })
})

//Create a new category
router.post('/', (req, res) => {
  let newCategory = new Category({
    name: req.body.name,
    limit: req.body.limit,
    color: "green",
    collapse: true,
    total: 0
  })
  newCategory.save()

  res.send(`The following product was successfully added: ${newCategory}`)
})

//Update category limit
router.put('/:id', (req, res) => {
  var newLimit = req.body.limit

  Category.findByIdAndUpdate(
    req.params.id, 
    { limit : newLimit}, 
    (err, category) => {
      if (err) throw err;
      else console.log(category)
    })
  res.send(`The ${req.category.name} was successfully updated`)
})

// router.delete('/:id', (req, res) => {
//   Category.findByIdAndDelete('5cd19ec5bf051c0710244a39')
//   res.send("deleted")
// })

module.exports = router