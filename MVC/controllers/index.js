
var mongoose = require('mongoose')
Topic = require('../models/Topic');



getTopic = function (req, res) {
    Topic.find((err, topics) => {
        if (err) return res.status(400).json({ success: false, err: err })
        res.render('index', { topics: topics })
    })
}

module.exports = {
    getTopic
}