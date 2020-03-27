const mongoose = require('mongoose')

const authorScheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', authorScheme)