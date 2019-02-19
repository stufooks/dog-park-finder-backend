const express = require('express')
const router = express.Router()

const Park = require('../db/Park')

router.get('/', (req, res) => {
  Park.find({})
    .then(parks => {
      res.json(parks)
    })
})

router.get('/:id', (req, res) => {
  Park.findOne({ _id: req.params.id })
    .then(park => {
      res.json(park)
    })
})

router.post('/', (req, res) => {
  Park.create(req.body)
    .then(park => {
      res.json(park)
    })
})

router.put('/:id', (req, res) => {
  let currentVal = 0
  Park.findOne({ _id: req.params.id })
    .then(park => {
      if(req.body.upvote) {
        currentVal = park.voteValue + 1
      } else {
        currentVal = park.voteValue - 1
      }
      })
      .then(() => {
        Park.findOneAndUpdate({ _id: req.params.id }, {$set: {voteValue: currentVal}}, {new: true})
          .then(park => {
            res.json(park)
          })
      })
})

router.delete('/:id', (req, res) => {
  Park.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send('delete complete')
    })
})

module.exports = router