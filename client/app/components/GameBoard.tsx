'use client'
import { Button, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import GameCell from './GameCell';
import axios from 'axios';
  
export default function GameBoard({}: {}){
    const [gameId, setGameId] = useState('')
    const [board, setBoard] = useState<string[][]>([['', '', ''], ['', '', ''], ['', '', '']]);
    const [currentPlayer, setCurrentPlayer] = useState<string>('X');

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
    const handleCellClick = async (row: number, col: number) => {}

    return (
        <Container sx={{ mt: '80px' }}>
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