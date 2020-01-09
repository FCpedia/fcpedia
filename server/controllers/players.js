const axiosAPI = require('../helpers/axios')

class Controller {

    static getSinglePlayer(req, res, next){
        axiosAPI(`players/${req.params.playerId}`)
        .then(({data}) => {
            res.status(200).json({player: data})
        }).catch(next);
    }

    static async getPlayerPicture(name){
        
    }

}

module.exports = Controller