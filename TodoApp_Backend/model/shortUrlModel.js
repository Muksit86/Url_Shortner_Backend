const mongoose = require('mongoose')
const shortid = require('shortid');

const urlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortid.generate(8)
    }
})

const urlModel = mongoose.model('urls', urlSchema)

module.exports = urlModel
