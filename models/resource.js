const mongoose= require("mongoose");
const resourceModel= new mongoose.Schema({
    image: {type: String, default: ''},
title:{type:String, required:true},
type:{type:String, enum:['Article', 'Video', 'Tip']},
description:{type:String,required:true},
createdBy:{type: mongoose.Schema.Types.ObjectId, ref:'User'}
}, {timestamps:true})

module.exports=mongoose.model("Resource",resourceModel);