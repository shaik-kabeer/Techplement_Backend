// const User = require('../models/User.model');
import User from '../models/User.model.js';

import { hashpassword, comparePassword } from '../utils/bcrypt.js';

export const registerUser = async (req, res) => {
    const { fullName, userName, email, password } = User(req.body);

    const existedUser = await User.findOne({
        $or: [{ username: User.username }, { email: User.email }]
    });


    // const existingUser=await User.findOne({email});
    if (existedUser) {
        return res.status(400).json({ message: "USer already exist" });
    } else {

        // const hashedPassword= await hashpassword(password);

        // const newUser = new User(req.body);
        // await newUser.save();
        try {
            const user = new User(req.body);
            await User.create({
                userName,
                email,
                password,
                fullName

                // password:hashedPassword,
            },
                res.status(201).json({ message: "User created successfully", user }));

        }
        catch (error) {
            if (error.code === 11000 && error.keyPattern && error.keyValue) {
                // Duplicate key error
                console.log(error.keyValue);
                //   res.status(400).json({ error: 'Duplicate key error', duplicateKey: error.keyValue });
            } // } else {
  

       
        }
    }

}

export const loginUser = async (req, res) => {
    const { userName, email, password } = req.body;


    try {
        const user = await User.findOne({ email } || { userName });
        const userpassword = user.password;
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });

        }
        //   const passwordMatch = await comparePassword (password,userpassword);

        if (!(password === userpassword)) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        res.status(200).json({ message: "Login Succesfully" });



    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });

    }


    

}




// Function to handle updating user information
export const updatedUser = async (req, res) => {
    const { newuserName,password
        , email,newemail
        , newfullName
        , newpassword,
         confirmpassword ,} = req.body; // Assuming the user ID is in the URL parameter
     if (newpassword !== confirmpassword) {
         return res.status(401).json({ message: "Invalid Credentials" });
     }




    try {
        const user = await User.findOne({email}|| { userName });
        console.log(user);
        const userpassword = user.password;
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });

        }
        //   const passwordMatch = await comparePassword (password,userpassword);

        if (!(password === userpassword)) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        user.userName = req.body.newuserName,
            user.fullName = req.body.newfullName,
            user.email = req.body.newemail,
            user.password = req.body.newpassword,

            // Save the updated user
            await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}















