const router = require('express').Router()
const axiosAPI = require('../helpers/axios')
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

router.get('/coba', (req, res, next) => {
    axiosAPI('/competitions/2002/teams')
        .then(({data}) => {
            res.status(200).json(data.teams)
        })
        .catch(next)
})

module.exports = router