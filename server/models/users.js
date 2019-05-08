const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./product').schema

//add intake form to user's profile

const UserSchema = new Schema ({
  name: String,
  email: String,
  image: String,
  location: String,
  accountType: String,
  demographics: {
    race: String,
    gender: String,
    householdSize: Number,
  },
  cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  orderHistory: []
})

module.exports = mongoose.model('User', UserSchema)