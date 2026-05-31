const express=require('express');
const upload = require('../config/multerconfig');
const router=express.Router();
const {addResource, getAllResources, deleteResource, uploadResourceImage}= require('../controllers/resourceController');
const authMiddleware=require('../middleware/authMiddleware');
const {adminMiddleware}=require("../middleware/adminMiddleware");

router.post('/upload-image/:id', authMiddleware, adminMiddleware, upload.single('image'), uploadResourceImage);
router.post('/add',authMiddleware, adminMiddleware,addResource);
router.get('/all', authMiddleware ,getAllResources);
router.delete('/delete/:id', authMiddleware, adminMiddleware, deleteResource);

module.exports=router;