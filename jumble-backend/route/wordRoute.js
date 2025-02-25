const express = require('express');
const router = express.Router()
const { allWords,uploadWord } = require('../controllers/wordControllers')

router.route('/upload').post(uploadWord)
router.route('/fetchingwords').get(allWords)

module.exports = router;