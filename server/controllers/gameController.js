const asyncHandler = require('express-async-handler')
const Game = require('../models/gameModel')
const { ObjectId } = require('mongodb');

/*
    Method: POST /api/game
    Return: record of new game
*/
const startGame = asyncHandler( async (req, res) => {
    const game = await Game.create({})
    res.status(201).json(game)
})

const findGameById = async(gameId) => {
    try{
        const game = await Game.findById(new ObjectId(gameId)).lean()
        return game
    } catch(error) {
        throw error
    }
}

module.exports = {
    startGame,
    findGameById
}