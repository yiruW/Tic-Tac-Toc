const express = require('express')
const router = express.Router()
const handleMove = require('../controllers/moveController')

router.post('/', handleMove)

module.exports = router