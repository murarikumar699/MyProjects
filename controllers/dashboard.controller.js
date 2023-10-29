// function dashboard(req,res){
//     try{
//         return res.render('index');
//     }catch(error){
//         return res.render('error');
//     }
// }

function dashboard(req,res){
    try{
        return res.render('index');
    }catch(error){
        return res.render('error');
    }
}

function editTable(req,res){
    try{
        return res.render('table');
    }catch(error){
        return res.render('error');
    }
}

function box(req,res){
    try{
        return res.render('boxColor/index');
    }catch(error){
        return res.render('error');
    }
}

function accordian(req,res){
    try{
        return res.render('accordian/index');
    }catch(error){
        return res.render('error');
    }
}

function swapDivColor(req,res){
    try{
        return res.render('accordian/swapDivColor');
    }catch(error){
        return res.render('error');
    }
}

function product(req,res){
    try{
        return res.render('productCart/index');;
    }catch(error){
        return res.render('error');
    }
}

module.exports = {
    dashboard,
    editTable,
    box,
    accordian,
    swapDivColor,
    product
}