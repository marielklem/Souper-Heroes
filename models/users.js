const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./products').schema

//add intake form to user's profile

const UserSchema = new Schema ({
  name: String,
  email: String,
  image: String,
  location: String,
  accountType: String,
  cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

module.export = mongoose.model('User', UserSchema)