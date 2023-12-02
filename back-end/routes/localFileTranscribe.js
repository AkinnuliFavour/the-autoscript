const express = require('express');
const router = express.Router()
const transcribeController = require('../controller/transcribeController')

router.route('/')
    .post(transcribeController.sendFile)


module.exports = router;