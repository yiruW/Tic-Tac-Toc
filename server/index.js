require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const port = process.env.PORT || 8000

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/game', require('./routers/gameRouter'));
app.use('/api/logs', require('./routers/logsRouter'));
app.use('/api/move', require('./routers/moveRouter'));

app.listen(port, () => console.log(`sever run on port ${port}`))