const express=require("express");
const router=express.Router();
const {bookAppointment, getUserAppointment, cancelAppointment}= require("../controllers/appointmentController");
const authMiddleware=require("../middleware/authMiddleware");

//Appointment Routes
router.post("/", authMiddleware, bookAppointment);
router.get("/", authMiddleware, getUserAppointment);
router.put("/", authMiddleware, cancelAppointment);

module.exports=router;