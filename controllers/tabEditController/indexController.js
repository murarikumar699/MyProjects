async function index(req, res){
    try{
        return res.render('tabAddEdit/index');
    }catch(error){
        console.log("error",error)
        return res.send({status:500,message:"Something went wrong"});
    }
}

async function infiniteComment(req, res){
    try{
        return res.render('infiniteComment/index');
    }catch(error){
        console.log("error",error)
        return res.send({status:500,message:"Something went wrong"});
    }
}

async function multiSelect  (req, res){
    try{
        return res.render('multiSelect/index');
    }catch(error){
        console.log("error",error)
        return res.send({status:500,message:"Something went wrong"});
    }
}

module.exports= {
    index,
    infiniteComment,
    multiSelect
}