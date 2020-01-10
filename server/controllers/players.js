const axiosAPI = require('../helpers/axios')

class Controller {

    static getSinglePlayer(req, res, next){
        // console.log(req.params);
        // let playerData;
        axiosAPI(`players/${req.params.playerId}`)
        .then(async ({data}) => {
            // playerData = data
            
            for (const key in data) if(data[key] == null) data[key] = '???'

            data.image = await Controller.getPlayerPicture(data.name)
            res.status(200).json(data)
        }).catch(next);
    }

    static async getPlayerPicture(name){
        let query = name.replace(/\s/g, '+')
        let {data} = await axiosAPI(`https://en.wikipedia.org/w/api.php?action=query&titles=${query}&prop=extracts|pageimages|info&pithumbsize=500&inprop=url&format=json&origin=*`)
        let imageURL;
        // let imageURL = data.query.pages[Object.keys(data.query.pages)[0]].thumbnail.source
        if(data.query.pages[Object.keys(data.query.pages)[0]].thumbnail) imageURL = data.query.pages[Object.keys(data.query.pages)[0]].thumbnail.source
        else imageURL = `https://api.adorable.io/avatars/285/${Controller.randomString()}.png`
        return imageURL
    }

    static randomString(){
        return Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6)
    }
}

module.exports = Controller