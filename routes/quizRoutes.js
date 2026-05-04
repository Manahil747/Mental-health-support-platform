const express=require('express');
const router=express.Router();
const {createQuiz, getAllQuizzes, submitQuiz, saveQuizResult, getQuizHistory}= require('../controllers/quizController');
const authMiddleware=require('../middleware/authMiddleware');

router.post('/create', authMiddleware, createQuiz);
router.get('/all', authMiddleware ,getAllQuizzes);
router.post('/submit',authMiddleware,submitQuiz);
router.post('/saveResult', authMiddleware, saveQuizResult);
router.get('/history', authMiddleware, getQuizHistory);

module.exports=router;