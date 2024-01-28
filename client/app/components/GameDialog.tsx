import React from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
  
export default function GameDialog({
    open,
    onClose,
    onRestart,
    message
}: {
    open: boolean;
    onClose: () => void;
    onRestart: () => void;
    message: string;
}) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{message}</DialogTitle>
            <DialogActions>
                <Button onClick={onRestart} color="primary">
                    Start a New Game
                </Button>
            </DialogActions>
        </Dialog>
    );
}