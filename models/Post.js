var mongoose = require('mongoose'), Schema = mongoose.Schema

var PostSchema = new mongoose.Schema({
    post_author: String,
    post_description: String,
    post_title: String,
    created_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Post', PostSchema)
