const axiosAPI = require('../helpers/axios');

class TeamController
{
    static getAllTeamsByArea(req,res)
    {
        axiosAPI(`/teams?areas=${req.query.areas|| ""}`)
        .then(({data}) => {
            res.status(200).send(data.teams)
        })
        .catch((err) => {
            res.status(400).send(err);
        })
    }

    static getTeamById(req,res)
    {
        axiosAPI(`/teams/${req.params.id}`)
        .then(({data}) => {
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(400).send(err);
        });
    }
}

module.exports = TeamController;