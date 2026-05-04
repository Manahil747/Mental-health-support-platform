const mongoose= require('mongoose');

const quizResult= new mongoose.Schema({
     userId:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
     quizId: {type: mongoose.Schema.Types.ObjectId, ref:'Quiz', required: false},
     score:{type:Number, required:true},
     interpretation:{type:String, enum:['Low', 'Moderate', 'High']},
     date:{type:Date, default:Date.now}
}, {timestamps:true});

module.exports=mongoose.model('Results',quizResult);