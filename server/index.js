require('dotenv').config();

const express = require('express')
const connectDB = require('./config/db');
const port = process.env.PORT || 8000

connectDB()

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/game', require('./routes/gameRoutes'))
app.use('/api/logs', require('./routes/logsRoutes'))
app.use('/api/move', require('./routes/moveRoutes'))

app.listen(port, () => console.log(`sever run on port ${port}`))