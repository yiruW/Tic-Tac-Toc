require('dotenv').config();

const express = require('express')
const connectDB = require('./config/db');
const port = process.env.PORT || 8000

connectDB()

const app = express()

app.listen(port, () => console.log(`sever run on port ${port}`))