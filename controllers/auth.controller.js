const db = require("../models");
const {resFunction} = require("../utils/response")
const {Validate} = require("../utils/validate")
// models path depends on your structure
const User = db.User;

async function signUp(req,res,next){
    try{
        console.log("Dvfdfvdfdfb ");
        let isVadidate = Validate(["firstName","lastName","email","password"],req.body);
        if(isVadidate != true){
            return res.status(400).json(resFunction(false,[],isVadidate,null))
        }
        console.log("req.file",req.file.filename);

        const {firstName,lastName,email,country,city,password} = req.body;
        let user = await User.create({
            firstName:firstName,
            lastName:lastName,
            email:email,
            country:country,
            city:city,
            password:password,
            profileImage:req.file.filename
        })

        if(user){
            return res.json(resFunction(true,[],"User created successsfully",null))
        }else{
            return res.status(400).json(resFunction(true,[],"something went wrong",null))
        }
        
       
    }catch(error){
        return res.status(400).json(resFunction(true,[],"something went wrong",null))
    }
}


module.exports = {
    signUp
}