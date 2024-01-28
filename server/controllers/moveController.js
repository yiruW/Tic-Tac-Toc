const asyncHandler = require('express-async-handler')
const { ObjectId } = require('mongodb');
const Move = require('../models/moveModel')
const { createLog } = require('./logsController')


const createMove = async (newMove) => {
    const move = Move.create(newMove);
    return move;
}

const handleMove = asyncHandler( async (req, res) => {
    const {gameId, player, location} = req.body;
    const log = { gameId: new ObjectId(gameId), message: '', isEventValid: true };

    try {
        if (isValid) {
            const newMove = { gameId: new ObjectId(gameId), player: player, isEventValid: true };
            await createMove(newMove);
            if (isWin) {
                message = `Player ${player} Wins`;
            } else if (isDraw) {
                message = `Game Ends in a Draw`;
            } else {
                message = `Player ${player} made a valid move`;
            }
            createLog({...log, message: message});
            res.status(200).json();
        } else {
            message = `Player ${player} made a invalid move`;
            createLog({...log, message: message, isEventValid: false});
            res.status(400).json();
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred during the move' });
    }
})

const isValid = () => {
    return true
}

const isWin = () => {
    return true
}

const isDraw = () => {
    return true
}

module.exports = handleMove