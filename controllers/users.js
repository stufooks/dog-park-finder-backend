const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");

const passport = require("../config/passport");
const config = require("../config/config");
const User = require("../db/User");

router.post("/signup", (req, res) => {
  let newUser = {
    email: req.body.email,
    password: req.body.password
  };
  User.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      User.create(newUser).then(user => {
        if (user) {
          var payload = {
            email: user.email
          };
          var token = jwt.encode(payload, config.jwtSecret);
          res.json({
            token: token
          });
        } else {
          res.sendStatus(401);
        }
      });
    } else {
      res.sendStatus(401);
    }
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      if (user.password === req.body.password) {
        var payload = {
          email: user.email
        };
        var token = jwt.encode(payload, config.jwtSecret);
        res.json({
          token: token
        });
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  });
});

module.exports = router