const router = require('express').Router()
const playerController = require('../controllers/players')

router.get('/:playerId', playerController.getSinglePlayer)

module.exports = router