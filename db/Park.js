const mongoose = require('./connection')

const Park = new mongoose.Schema({
  name: String,
  location: String,
  size: String,
  bathrooms: Boolean,
  parking: Boolean,
  misc: String,
  voteValue: {
    type: Number,
    default: 0
  },
  author: String
})

module.exports = mongoose.model('Park', Park)