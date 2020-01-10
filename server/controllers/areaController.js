const axiosAPI = require('../helpers/axios');

class AreaController
{
    static getAllAreas(req,res)
    {
        axiosAPI(`/areas`)
        .then(({data}) => {
            res.send(data.areas)
        })
        .catch((err) => {
            res.status(400).send(err);
        })
    }
}

module.exports = AreaController;