const express = require('express')
const router = express.Router()

const Park = require('../db/Park')

router.get('/', /* get all parks */)

router.get('/:id', /* get one park based on id */)

router.post('/', /* create a new park */)

router.put('/:id', /* get one park based on id and update it */)

router.delete('/id' /* get one park by its id and delete it */)

module.exports = router