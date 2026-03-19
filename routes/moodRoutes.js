const express=require('express');
const router= express.Router();
const {addMood, getMoodHistory}= require('../controllers/moodController');
const authMiddleware=require('../middleware/authMiddleware');

router.post('/add', authMiddleware, addMood);
router.get('/history', authMiddleware, getMoodHistory);

module.exports=router;