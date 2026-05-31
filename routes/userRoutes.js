const express=require("express");
const router=express.Router();
const authMiddleware=require('../middleware/authMiddleware');
const {getProfile, updateProfile, deleteAccount, changePassword, uploadProfilePhoto} = require('../controllers/userController');
const upload = require('../config/multerconfig');

router.post('/upload-photo', authMiddleware, upload.single('photo'), uploadProfilePhoto);
router.get('/profile', authMiddleware, getProfile );
router.put('/profile', authMiddleware, updateProfile); 
router.delete('/delete', authMiddleware, deleteAccount);
router.put('/change-password', authMiddleware, changePassword);

module.exports=router;