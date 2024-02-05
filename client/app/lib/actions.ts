'use server'
import axios from 'axios';
import { APIs } from './constants';
import { GameLogs, Move } from './types';

export async function startNewGame() {
    try {
        const response = await axios.post(APIs.Game);
        return response;
    } catch (error) {
        console.error('Server Error:', error);
        throw new Error('Failed to start new game.');
    }
}

export async function handleMove( newMove: Move ) {
    try {
        const response = await axios.post(APIs.Move, newMove);
        return response;
    } catch (error) {
        console.error('Server Error:', error);
        throw new Error('Failed to handle move.');
    }
}

export async function fetchLogs() {
    try {
        const response = await axios.get(APIs.Logs);
        const logs: GameLogs = await response.data;
        return logs
    } catch (error) {
      console.error('Server Error:', error);
      throw new Error('Failed to fetch logs.');
    }
}