const express = require('express')
const LogRobo = require('../models/logModel')
const LogRepository = require('../repositories/logRepository')
const LogService = require('../services/logService')
const LogController = require('../controllers/logController')

const router = express.Router()

const logRepository = new LogRepository(LogRobo)
const logService = new LogService(logRepository)
const logController = new LogController(logService)

router.get('/logs', (req, res) => logController.getLogs(req, res))

module.exports = router
