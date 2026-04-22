const express=require("express");
const mongoose=require("mongoose");
const dotenv=require('dotenv');
dotenv.config();
const app=express();
app.use(express.json());
const PORT= process.env.PORT || 5000;
const connectDB=require('./config/db');
const auth=require('./routes/authRoutes');
const user=require('./routes/userRoutes');
const mood=require('./routes/moodRoutes');
const quiz=require('./routes/quizRoutes');
const appointment=require("./routes/appointmentRoutes");


connectDB();

app.use("/auth", auth);
app.use('/user', user);
app.use('/mood', mood);
app.use('/quiz', quiz);
app.use('/appointment', appointment);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})
