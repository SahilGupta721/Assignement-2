let Usermodel=require('../models/contact');


module.exports.create=async function(req,res,next){
    try{
        let newUser=new Usermodel(req.body);
    }
    catch(error){

    }
}

