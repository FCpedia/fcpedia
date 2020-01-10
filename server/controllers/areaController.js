const axiosAPI = require('../helpers/axios');

class AreaController
{
    static getAllAreas(req,res,next)
    {
        axiosAPI(`/areas`)
        .then(({data}) => {
            res.send(data.areas)
        })
        .catch(next);
    }
}

module.exports = AreaController;