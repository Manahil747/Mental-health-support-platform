const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// CORS pehle lagao
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());

// Uploads folder
app.use('/uploads', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
}, express.static('uploads'));

// Helmet - crossOriginResourcePolicy disable karo
app.use(helmet({
    crossOriginResourcePolicy: false
}));

// Rate Limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    message: 'Too many requests'
});
app.use(limiter);

const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');

connectDB();

const auth = require('./routes/authRoutes');
const user = require('./routes/userRoutes');
const mood = require('./routes/moodRoutes');
const quiz = require('./routes/quizRoutes');
const appointment = require("./routes/appointmentRoutes");
const therapist = require("./routes/therapistRoutes");
const resource = require("./routes/resourceRoutes");
const chatAI = require("./routes/chatRoutes");
const dashboard = require("./routes/dashboardRoutes");

app.use("/auth", auth);
app.use('/user', user);
app.use('/mood', mood);
app.use('/quiz', quiz);
app.use('/appointment', appointment);
app.use("/therapist", therapist);
app.use('/resource', resource);
app.use("/chatAI", chatAI);
app.use("/dashboard", dashboard);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});