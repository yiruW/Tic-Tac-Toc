'use client'
import { Button, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import GameCell from './GameCell';
import axios from 'axios';
import SnakeBar from './SnakeBar';
  
export default function GameBoard({}: {}){
    const [gameId, setGameId] = useState('')
    const [board, setBoard] = useState<string[][]>([['', '', ''], ['', '', ''], ['', '', '']]);
    const [currentPlayer, setCurrentPlayer] = useState<string>('X');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarType, setSnakebarType] = useState<'success' | 'error'>('success');
    const [snakebarMessage, setsnakebarMessage] = useState('');

    const restartGame = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/game');
            if (response.status == 201) setGameId(response.data._id)
            setBoard([['', '', ''], ['', '', ''], ['', '', '']])
            setCurrentPlayer('X')
            setGameId(response.data._id)
        } catch (error) {
            console.error('Error restarting game:', error);
        }
    }

    const showSnackbar = (type: 'success' | 'error', message: string) => {
        setSnakebarType(type);
        setsnakebarMessage(message);
        setSnackbarOpen(true);
    };

    const handleCellClick = async (row: number, col: number) => {
        axios.post('http://localhost:8000/api/move', {
            gameId: gameId,
            player: currentPlayer,
            location: row * 3 + col
        }).then((response) => {
            // handle valid move
            const newBoard = board.map((r, ri) => 
                r.map((c, ci) => (ri === row && ci === col ? currentPlayer : c))
            );
            setBoard(newBoard);
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
            showSnackbar( 'success', response.data.msg)
        }).catch((error) => {
            if (error.response!.status === 400) {
                // handle invalid move
                showSnackbar( 'error', error.response?.data?.message)
            } else {
                console.error('Error making move:', error)
            }
        })
    }

    return (
        <Container sx={{ mt: '80px' }}>
            <SnakeBar
                open={snackbarOpen}
                handleClose={() => setSnackbarOpen(false)}
                message={snakebarMessage}
                type={snackbarType}
            />
            <Grid container direction="row" justifyContent="center"  alignItems="center">
                {board.map((row, rowIndex) => (
                    <Grid container item key={rowIndex} justifyContent="center">
                        {row.map((cell, colIndex) => (
                            <GameCell
                                key={`${rowIndex}-${colIndex}`}
                                value={cell}
                                preview={cell === '' ? currentPlayer : ''}
                                onClick={() => handleCellClick(rowIndex, colIndex)}
                            />
                        ))}
                    </Grid>
                ))}
            </Grid>
            <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                <Button variant="contained" color="primary" onClick={restartGame}>
                    {gameId ? 'Restart Game' : 'Start Game'}
                </Button>
            </Grid>
        </ Container>
    );
}