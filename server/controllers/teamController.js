const axiosAPI = require('../helpers/axios');


class TeamController {
    static getAllTeamsByArea(req, res, next) {
        axiosAPI(`teams?areas=${req.query.areas || ""}`)
            .then(({ data }) => {
                res.status(200).send(data.teams)
            })
            .catch(next)
    }

    static getTeamById(req, res, next) {
        axiosAPI(`teams/${req.params.id}`)
            .then(({ data }) => {
                res.status(200).send(data)
            })
            .catch(next);
    }
}

module.exports = TeamController;