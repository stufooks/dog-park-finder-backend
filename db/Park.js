const mongoose = require('./connection')

const Park = new mongoose.Schema({
  name: String,
  location: String,
  size: String,
  bathrooms: Boolean,
  parking: Boolean,
  misc: String,
  voteValue: Number
})

module.exports = mongoose.model('Park', Park)