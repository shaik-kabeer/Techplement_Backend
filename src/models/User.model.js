// import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// import bcrypt from './utils/bcrypt.js';
// import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        //  required: true,
        // unique: true,
        lowercase: true,
        trim: true, 
        // index: true
    },

    fullName: {
        type: String,
        // required: true,
        // unique: true,
        lowercase: true,
        trim: true, 
        // index: true
    },
    
    email: {
        type: String,
        // required: true,
        // unique: true,
        lowercase: true,
        trim: true, 
        // index: true
    },
    password:  {
        type: String,
        // required: true,
        // unique: true,
        lowercase: true,
        trim: true, 
        // index: true
    },
});

    const User = mongoose.model('User', UserSchema);
    export default User ;
