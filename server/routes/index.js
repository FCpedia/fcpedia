const router = require('express').Router()
const playerRouter = require('./players')

// for axios in controllers
// let axiosAPI = require('../helpers/axios') //taruh di atas file controller

// cara pakai 
// misal instance Controller

// class Controller {
//     static get teams(req,res,next){
//         axiosAPI(url)
//     }
// }

// isi url tersebut mengarah ke api yang di tuju, semisal: teams, players
// headers sudah terdaftar sebagai token football-data dan method sebagai get

router.use('/players', playerRouter)

module.exports = router