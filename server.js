
import dotenv from 'dotenv';

import express from 'express';
 import  json  from 'body-parser';
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
// import userRoute from './src/routes/userRoute.js';
import connectDB from './src/db/index.js';
import router from './src/routes/userRoute.js';
// const bodyParser = require('body-parser');


dotenv.config({path:'./env'});
const  app = express();
const port = 8000;
// mongoose.connect('mongodb://localhost:27017/express-auth', {useNewUrlParser: true, useUnifiedTopology: true})
// app.use(json());
app.use(express.json());
// connectDB();
connectDB();
app.use('/user',router);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})