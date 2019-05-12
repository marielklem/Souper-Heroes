const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users').schema

const OrderSchema = new Schema ({
  name: String,
  nameId: String,
  status: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  order: {}
})

module.exports = mongoose.model('Order', OrderSchema)