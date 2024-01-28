const asyncHandler = require('express-async-handler')
const Game = require('../models/gameModel')

/*
    Method: POST /api/game
    Return: record of new game
*/
const startGame = asyncHandler( async (req, res) => {
    const game = await Game.create({})
    res.status(201).json(game)
})

module.exports = startGame