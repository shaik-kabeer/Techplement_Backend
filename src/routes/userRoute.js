import express from 'express';
// const express = require('express');
const router = express.Router();
import {registerUser,loginUser,updatedUser} from '../controllers/user.controllers.js';
// const {registerUser,loginUser}=require('../controllers/user.controllers');

router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/login/update',updatedUser);
// module.exports = router;

export default router;