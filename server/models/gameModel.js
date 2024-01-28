const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
    board: [[String]],
}, {
    timestamps: true
})

module.exports = mongoose.model('Game', GameSchema)