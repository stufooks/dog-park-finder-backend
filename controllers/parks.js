const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");

// const passport = require("../config/passport");
const config = require("../config/config");

const Park = require("../db/Park");

router.get("/", (req, res) => {
  Park.find({})
  .sort([['voteValue', -1]])
  .then(parks => {
    res.json(parks);
  });
});

router.get("/:id", (req, res) => {
  console.log('show method called')
  Park.findOne({ _id: req.params.id }).then(park => {
    res.json(park);
  });
});

router.post("/", (req, res) => {
  console.log(req.body)
  Park.create(req.body).then(park => {
    res.json(park);
  });
});

router.put("/:id", (req, res) => {
  let currentVal = 0;
  Park.findOne({ _id: req.params.id })
    .then(park => {
      if (req.body.upvote) {
        currentVal = park.voteValue + 1;
      } else {
        currentVal = park.voteValue - 1;
      }
    })
    .then(() => {
      Park.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { voteValue: currentVal } },
        { new: true }
      ).then(park => {
        res.json(park);
      });
    });
});

router.delete("/:id", (req, res) => {
  console.log(jwt.decode(req.body.token, config.jwtSecret))
  Park.findById(req.params.id)
    .then(park => {
      if(park.author === jwt.decode(req.body.token, config.jwtSecret).email) {
        Park.findByIdAndDelete(req.params.id)
          .then(() => {
            res.send('delete complete')
          })
      } else {
        res.send('not authorized')
      }
    });
});

module.exports = router;
