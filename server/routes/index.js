const router = require('express').Router();

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

// router.use('/', Controller)

const TeamController = require("../controllers/teamController");

router.get('/teams', (req,res) => {             // GET /teams?areas=<areaID>
    TeamController.getAllTeamsByArea(req,res);
});

router.get('/teams/:id', (req,res) => {             // GET /teams/<teamID>
    TeamController.getTeamById(req,res);
});


module.exports = router