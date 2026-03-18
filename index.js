const express=require("express");
const mongoose=require("mongoose");
const dotenv=require('dotenv');
dotenv.config();
const app=express();
app.use(express.json());
const PORT= process.env.PORT || 5000;
const connectDB=require('./config/db');
const auth=require('./routes/authRoutes');
const login=require('./routes/authRoutes');

connectDB();

app.use("/auth", auth);
app.use("/auth", auth);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})
