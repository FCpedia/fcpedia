const TeamController = require("../controllers/teamController");
const router = require('express').Router()

router.get('/', TeamController.getAllTeamsByArea);

router.get('/:id', TeamController.getTeamById)

module.exports = router