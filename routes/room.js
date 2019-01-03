var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Room = require('../models/Room.js')

/* GET ALL ROOMS */
router.get('/', (req, res, next) => {
  Room.find(function (err, products) {
    if (err) return next(err)
    res.json(products)
  })
})

/* GET SINGLE ROOM BY ID */
router.get('/:id', (req, res, next) => {
  Room.findById(req.params.id, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* SAVE ROOM */
router.post('/', (req, res, next) => {
  Room.create(req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* UPDATE ROOM */
router.put('/:id', (req, res, next) => {
  Room.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* DELETE ROOM */
router.delete('/:id', (req, res, next) => {
  Room.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router