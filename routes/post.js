var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var app = express()
var server = require('http').createServer(app)
var Post = require('../models/Post.js')


/* GET ALL ROOMS */
router.get('/', (req, res, next) => {
    Post.find(function (err, post) {
        if (err) return next(err)
        res.json(post)
    })
})

/* GET SINGLE ROOM BY ID */
router.get('/:id', (req, res, next) => {
    Post.findById(req.params.id, function (err, post) {
        if (err) return next(err)
        res.json(post)
    })
})

/* SAVE ROOM */
router.post('/', (req, res, next) => {
    Post.create(req.body, function (err, post) {
        if (err) return next(err)
        res.json(post)
    })
})

/* UPDATE ROOM */
router.put('/:id', (req, res, next) => {
    Post.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err)
        res.json(post)
    })
})

/* DELETE ROOM */
router.delete('/:id', (req, res, next) => {
    Post.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err)
        res.json(post)
    })
})

module.exports = router