const User= require('../models/user');
const responseModel=require('../utils/responseModel');
const jwt=require('jsonwebtoken');

const getProfile= async(req,res)=>{
    try{
        
    }
    catch(err){
        res.status(404).json(responseModel({statusCode:404, success:false, message:'User not found :('}))
    }
}