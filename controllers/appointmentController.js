const Appointment=require('../models/appointment');
const responseModel=require("../utils/responseModel");

//Book appointment
const bookAppointment=async(req,res)=>{
    try{
        const {therapistId, date, time}= req.body;
        const newAppointment= new Appointment({userId:req.user.userId, therapistId, date, time});
        await newAppointment.save();
        return res.status(201).json(responseModel({statusCode:201, success:true, data:newAppointment ,message:'Appointment booked sucessfully:)'}))
    }
    catch(err){
        res.status(400).json(responseModel({statusCode:400, success:false, message:'Bad request:('}));
    }
}
//get Appointment
const getUserAppointment=async(req, res)=>{
    try{
    res.status(200).json(responseModel({statusCode:200, success:true, data: , message:'Get data successfully:)'}));
    }
    catch(err){
        res.status(404).json(responseModel({statusCode:404, success:false, message:'Data not found:('}));
    }
}
module.exports={bookAppointment, getUserAppointment};