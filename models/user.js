const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./products').schema

const UserSchema = new Schema ({
  name: String,
  email: String,
  image: String,
  cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

module.export = mongoose.model('User', UserSchema)