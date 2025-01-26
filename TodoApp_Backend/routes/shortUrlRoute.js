const express = require('express')
const router = express.Router()
const { handleGetShortUrl, handleCreateShortUrl } = require('../controllers/shortUrlControllers')

router.get('/:shortid', handleGetShortUrl)
router.post('/shortenurl', handleCreateShortUrl)

module.exports = router