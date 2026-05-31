const express=require("express");
const router=express.Router();
const {addTherapist, getAllTherapists, getTherapistById, uploadTherapistPhoto}= require("../controllers/therapistController");
const authMiddleware=require("../middleware/authMiddleware");
const {adminMiddleware}=require("../middleware/adminMiddleware");
const upload = require('../config/multerconfig');


//Therapist Routes
// "_id": "6a1aa935e729263e50308acd"
router.post('/upload-photo/:id', authMiddleware, adminMiddleware, upload.single('photo'), uploadTherapistPhoto);
router.post("/add", authMiddleware, adminMiddleware,addTherapist);
router.get("/all", authMiddleware,getAllTherapists);
router.get("/:id", authMiddleware,getTherapistById);

module.exports=router;