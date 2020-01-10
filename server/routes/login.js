const router = require("express").Router()
const Controller = require('../controllers/login')

router.post('/', Controller.login)
module.exports = router