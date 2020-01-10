const googleTokenVerify = require('../helpers/verifgoogle')
const { genToken, verifyToken } = require('../helpers/jwt')

class Login {
    static login(req, res, next) {
        const token = req.body.data.id_token
        const payload = googleTokenVerify(token)
        let name = null
        let picture = null
        payload.then(data => {
            name = data.name
            picture = data.picture
            let payloadServer = {
                name: name,
                picture: picture
            }
            let serverToken = genToken(payloadServer)
            let sendtoClient = {
                name: name,
                picture: picture,
                token: serverToken
            }
            res.status(200).json(sendtoClient)
        })
    }
}

module.exports = Login