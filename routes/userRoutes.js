const express=require("express");
const router=express.Router();
const {getProfile, updateProfile}= require('../controllers/userController');
const authMiddleware=require('../middleware/authMiddleware');


router.get('/profile', authMiddleware, getProfile );
router.put('/update', authMiddleware, updateProfile);

module.exports=router;