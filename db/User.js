const mongoose = require('./connection')

const User = new mongoose.Schema({
  email: String,
  password: String
})

module.exports = mongoose.model('User', User)