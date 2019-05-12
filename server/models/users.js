const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Order = require('./orders').schema

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
  orderHistory: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
})

module.exports = mongoose.model('User', UserSchema)