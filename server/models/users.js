const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = require('./orders').schema

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
  cart: [],
  orderHistory: [ orderSchema ]
})

module.exports = mongoose.model('User', UserSchema)