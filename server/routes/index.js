const router = require('express').Router()
const playerRouter = require('./players')
const loginRouter = require('./login')
const teamRouter = require('./teams')
const ytrouter = require('./youtube');

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

router.get('/teams', TeamController.getAllTeamsByArea);  // GET /teams?areas=<areaID>

router.get('/teams/:id', TeamController.getTeamById); // GET /teams/<teamID>


router.use('/youtube', ytrouter);

router.use('/players', playerRouter)

router.use('/teams', teamRouter)

module.exports = router