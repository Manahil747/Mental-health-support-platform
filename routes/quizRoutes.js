const express=require('express');
const router=express.Router();
const {createQuiz, getAllQuizzes, submitQuiz}= require('../controllers/quizController');
const authMiddleware=require('../middleware/authMiddleware');

router.post();
router.get();

module.exports=router;