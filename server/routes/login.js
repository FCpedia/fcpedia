const router = require("express").Router()
const Controller = require('../controllers/login')

router.get('/', (req, res) => {
    res.send("ini halaman login")
})
module.exports = router