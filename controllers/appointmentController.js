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
    const userId= req.user.userId;
    const findAppointment= await Appointment.find({userId}).populate('therapistId');
    
    res.status(200).json(responseModel({statusCode:200, success:true, data:findAppointment, message:'Get data successfully:)'}));
    }
    catch(err){
        res.status(404).json(responseModel({statusCode:404, success:false, message:'Data not found:('}));
    }
}

//cancelAppointment
const cancelAppointment=async(req,res)=>{
    try{
    const id = req.params.id;
    const appointmentCancel= await Appointment.findOneAndUpdate({_id: req.params.id, userId: req.user.userId}, {status:'cancelled'}, {new:true});
    res.status(200).json(responseModel({statusCode:200, success:true, data:appointmentCancel, message:'Appointment cancel successfully:)'}));
    }
    catch(err){
        res.status(400).json(responseModel({statusCode:400, success:false, message:'Not cancelled:('}));
    }
}
module.exports={bookAppointment, getUserAppointment, cancelAppointment};