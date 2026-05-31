const responseModel=require("../utils/responseModel");
const upload = require('../config/multerconfig');
const Therapist= require('../models/therapist');

//addTherapist
const addTherapist = async(req,res)=>{
    try{
     const {name, specialization, availability, contactInfo} = req.body;
     const TherapistAdd= new Therapist({name, specialization, availability, contactInfo});
     await TherapistAdd.save();
     return res.status(200).json(responseModel({statusCode:200, success:true, data:TherapistAdd, message:'Therapist Data added successfully:('}));
    }
    catch(err){
        console.log(err);
     res.status(400).json(responseModel({statusCode:400, success:false, message:'Therapist not added:(', err:err.message}));
    }
}

//getAllTherapist
const getAllTherapists= async(req,res)=>{
    try{
        const findAllTherapist = await Therapist.find();
     res.status(202).json(responseModel({statusCode:202, success:true, data:findAllTherapist, message:'Get all therapists Data successfully:('}));
    }
    catch(err){
        res.status(404).json(responseModel({statusCode:404, success:false, message:'Data not found:('}));
    }
}

//getTherapistById
const getTherapistById= async(req,res)=>{
    try{
        const id=req.params.id;
        const findOneTherapist= await Therapist.findById({_id:id})
        if(!findOneTherapist){
        return res.status(404).json(responseModel({statusCode:404, success:false, message:'Therapist not found'}));
}
    res.status(202).json(responseModel({statusCode:202, success:true, data:findOneTherapist, message:'Fetch Therapist data successfully:('}));
    }
    catch(err){
    res.status(404).json(responseModel({statusCode:404, success:false, message:'Therapist not found:('}));
    }
}
//upload photo

const uploadTherapistPhoto = async (req, res) => {
    try {
        if(!req.file){
            return res.status(400).json(responseModel({statusCode: 400, success: false, message: 'No file uploaded'}));
        }
        const photoPath = `/uploads/${req.file.filename}`;
        const therapist = await Therapist.findByIdAndUpdate(
            req.params.id,
            {photo: photoPath},
            {new: true}
        );
        res.status(200).json(responseModel({statusCode: 200, success: true, data: therapist, message: 'Photo uploaded successfully!'}));
    } catch(err) {
        res.status(400).json(responseModel({statusCode: 400, success: false, message: err.message}));
    }
};


module.exports={addTherapist, getAllTherapists, getTherapistById, uploadTherapistPhoto};