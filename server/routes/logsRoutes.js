const express = require('express')
const router = express.Router()
const { getLogs, createLog } = require('../controllers/logsController')

router.get('/', getLogs)
router.post('/', createLog)

module.exports = router