const router = require('express').Router()
const playerRouter = require('./players')
const loginRouter = require('./login')
const teamRouter = require('./teams')
const ytrouter = require('./youtube')
const clubRouter = require('./club')
// const axios = require('axios')
// const Controller;

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

router.use('/login', loginRouter)

router.use('/youtube', ytrouter);

router.use('/players', playerRouter)

router.use('/teams', teamRouter)

router.use('/clubs', clubRouter)

module.exports = router