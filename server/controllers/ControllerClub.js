const axiosAPI = require('../helpers/axios')

class ControllerClub {
    static showBundes(req, res, next){
        axiosAPI('/competitions/2002/teams')
        .then(({data}) => {
            res.status(200).json(data.teams)
        })
        .catch(next)
    }

    static showLaliga(req, res, next){
        axiosAPI('/competitions/2019/teams')
        .then(({data}) => {
            res.status(200).json(data.teams)
        })
        .catch(next)
    }

    static showPremier(req, res, next){
        axiosAPI('/competitions/2021/teams')
        .then(({data}) => {
            res.status(200).json(data.teams)
        })
        .catch(next)
    }

    static showSerieA(req, res, next){
        axiosAPI('/competitions/2019/teams')
        .then(({data}) => {
            res.status(200).json(data.teams)
        })
        .catch(next)
    }
}

module.exports = ControllerClub