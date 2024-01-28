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

const createLog = asyncHandler( async (newLog) => {
    try {
        const log = await Log.create(newLog)
        return log
    } catch (error) {
        throw error
    }
})

module.exports = {
    getLogs,
    createLog
}