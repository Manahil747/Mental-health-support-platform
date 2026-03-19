const User= require('../models/user');
const responseModel=require('../utils/responseModel');


const getProfile= async(req,res)=>{
    try{
        const user= await User.findById(req.user.userId .select('-password'));
        res.status(200).json(responseModel({statusCode:200, success:true,data:user }));

    }
    catch(err){
        res.status(404).json(responseModel({statusCode:404, success:false, message:'User not found :('}))
    }
}

const updateProfile= async(req,res)=>{
    try{
        const {name, age, gender}= req.body;
        const updatedUser= await User.findByIdAndUpdate(req.user.userId, {name, age, gender}, {new:true} .select('-password'));

        res.status(200).json(responseModel({statusCode:200, success:true, data:updatedUser, message:'Updated successfuly'}));
    }
    catch(err){
        res.status(400).json(responseModel({statusCode:404, success:false, message:'User data not updated:('}))
    }
}


module.exports={getProfile, updateProfile};