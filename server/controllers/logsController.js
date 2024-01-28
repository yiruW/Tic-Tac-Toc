const asyncHandler = require('express-async-handler')
const Log = require('../models/logModel')
const { ObjectId } = require('mongodb');

/*
    Method: GET /api/logs
    Return: Log[]
*/
const getLogs = asyncHandler( async (req, res) => {
    const logs = await Log.find()
    res.status(200).json(logs)
})

/*
    Method: POST /api/logs
    Return: Log[]
*/
const createLog = asyncHandler( async (req, res) => {
    const {gameId, message, isEventValid} = req.body
    console.log(gameId, message, isEventValid)
    try {
        const log = await Log.create({
            gameId: new ObjectId(gameId), 
            message: message,
            isEventValid: isEventValid
        })
        res.status(200).json(log)
    } catch (error) {
        throw error
    }
})

module.exports = {
    getLogs,
    createLog
}