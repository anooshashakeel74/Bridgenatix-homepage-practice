const express = require('express');
const cors= require('cors');
require('dotenv').config();
const quotesRouter = require('./routes/quotes');
const verifytoken = require('./middleware/verifytoken');
const auth = require('./routes/auth');

const app= express();
app.use(cors({origin:process.env.CLIENT_URL || 'http://localhost:5173'}));
app.use(express.json());
app.use('/api/quotes', quotesRouter);
app.use('/api/verifytoken',verifytoken);
app.use('/api/auth',auth);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Backend is running on ${PORT}`));

