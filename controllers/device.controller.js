const db = require("../models");
const {resFunction} = require("../utils/response")
const {Validate} = require("../utils/validate")
// models path depends on your structure
const device = db.Device;

async function getAllDevice(req,res,next){
    try{
        let laptops = await  device.findAll({
            where: {
              type: "laptop"
            }
          });
        let mobiles = await  device.findAll({
            where: {
                type: "mobile"
            }
          });
        
        return res.json(resFunction(true,{'laptops':laptops,'mobiles':mobiles},"",null))
    }catch(error){
        console.log(error)
        return res.status(400).json(resFunction(true,[],"something went wrong",null))
    }
}


module.exports = {
    getAllDevice
}