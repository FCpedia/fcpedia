const router = require('express').Router()
const ControllerClub = require('../controllers/ControllerClub')

router.get('/bundesliga', ControllerClub.showBundes)
router.get('/laliga', ControllerClub.showLaliga)
router.get('/seriea', ControllerClub.showSerieA)
router.get('/premier', ControllerClub.showPremier)


module.exports = router