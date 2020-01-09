const axiosAPI = require('../helpers/axios');

class TeamController
{
    static getAllTeamsByArea(req,res)
    {
        axiosAPI(`/teams?areas=${req.query.areas|| ""}`)
        .then(({data}) => {
            res.send(data.teams)
        })
        .catch((err) => {
            res.status(400).send(err);
        })
    }
}

module.exports = TeamController;