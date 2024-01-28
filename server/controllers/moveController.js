const asyncHandler = require('express-async-handler')
const { ObjectId } = require('mongodb');
const Game = require('../models/gameModel')
const Move = require('../models/moveModel')
const { createLog } = require('./logsController');
const { findGameById } = require('./gameController');

const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const LOG_MESSAGE = {
    WIN: (player) => `Player ${player} Wins`,
    DRAW: () => `Game Ends in a Draw`,
    VALID_MOVE: (player, location) => `Player ${player} made a valid move to [${Math.floor(location/3)}, ${location % 3}]`,
    INVALID_MOVE: (player, location) => `Player ${player} made a invalid move to [${Math.floor(location/3)}, ${location % 3}]`,
}

/*
    Method: POST /api/move
    return: 
*/
const handleMove = asyncHandler( async (req, res) => {
    const {gameId, player, location} = req.body;
    const log = { gameId: new ObjectId(gameId), message: '', isEventValid: true };
    let message = '';
    let isGameEnd = false;

    try {
        if (await isValid(gameId, player, location)) {
            const newMove = { gameId: new ObjectId(gameId), player: player, location: location };
            await createMove(newMove);
            if (await isWin(gameId, player)) {
                message = LOG_MESSAGE.WIN(player);
                isGameEnd = true;
            } else if (await isDraw(gameId)) {
                message = LOG_MESSAGE.DRAW();
                isGameEnd = true;
            } else {
                message = LOG_MESSAGE.VALID_MOVE(player, location);
            }
            createLog({...log, message: message});
            res.status(200).json({ success: true, isGameEnd: isGameEnd, msg: message });
        } else {
            message = LOG_MESSAGE.INVALID_MOVE(player, location);
            createLog({...log, message: message, isEventValid: false});
            res.status(400).json({ message: message });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred during the move' });
    }
})

// Insert Move Record to DB
const createMove = async (newMove) => {
    const move = Move.create(newMove);
    return move;
}

// Fetch All the Moves under Game #
const getMovesByGameId = async (gameId) => {
    try {
        return await Move.find({ gameId });
    } catch (error) {
        console.error('Error fetching moves: ', error);
        throw error;
    }
}

// const isCurrentPlayerTurn = async (gameId, player) => {
//     try {
//         const currentGame = await findGameById(gameId);
//         if (currentGame) {
//             return currentGame.currentPlayer === player;
//         }
//         return false;
//     } catch (error) {
//         console.error('Error checking player valid: ', error);
//         throw error;
//     }
// }

const isMoveLocationValid = async (gameId, location) => {
    try {
        const moves = await getMovesByGameId(new ObjectId(gameId));
        return !moves?.some(move => move.location === location);
    } catch (error) {
        console.error('Error checking move location:', error);
        throw error;
    }
};

// Check Move Valid - Player & Location
const isValid = async (gameId, player, location) => {
    // const isPlayerValid = await isCurrentPlayerTurn(gameId, player);
    const isLocationValid = await isMoveLocationValid(gameId, location);
    return isLocationValid
}

const isWin = async (gameId, player) => {
    try {
        const moves = await getMovesByGameId(gameId);
        const currentPlayerMoves = moves.reduce((arr, move) => {
            if (move.player === player) {
                arr.push(move.location);
            }
            return arr;
        }, []);
        const result =  WINNING_COMBOS.some(
            combination => combination.every(
                element => currentPlayerMoves.includes(element)));
        return result
    } catch (error) {
        console.error('Error checking WIN condition:', error);
        throw error;
    }
}

const isDraw = async (gameId) => {
    try {
        const moves = await getMovesByGameId(gameId)
        return moves.length >= 9
    } catch (error) {
        console.error('Error checking DRAW condition:', error);
        throw error;
    }
}

module.exports = handleMove