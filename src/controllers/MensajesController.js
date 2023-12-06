const MensajesModel = require('../models/MensajesModel');

class MensajesController
{
    static async indexGet(req,res)
    {
        let data = await MensajesModel.consultar();
        res.send(data);
    }
}

module.exports = MensajesController;