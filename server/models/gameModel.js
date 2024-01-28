const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
    board: [[String]],
    currentPlayer: {
        type: String,
        required: true,
        enum: ['X', 'O'],
        default: 'X'
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Game', GameSchema)