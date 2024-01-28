'use client'
import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import GameCell from './GameCell';
  
export default function GameBoard({}: {}){
    const [board, setBoard] = useState<string[][]>([['', '', ''], ['', '', ''], ['', '', '']]);
    const [currentPlayer, setCurrentPlayer] = useState<string>('X');

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
        </ Container>
    );
}