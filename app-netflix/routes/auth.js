const express = require('express');
const router = express.Router();
const User = require("../models/User");
const CryptoJS= require('crypto-js');
const jwt= require('jsonwebtoken');



// REGISTER
router.post("/register", async (req, res)=>{
    
    const newUser = new User({
        "username": req.body.username,
        "email": req.body.email,
        "password": CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        isAdmin: req.body.isAdmin
    })
    try{
    const user = await newUser.save();
    
    res.status(201).json(user);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});
// LOGIN
router.post("/login", async (req, res )=>{
    try{
        const user= await User.findOne({username: req.body.username})
        if(!user)
        {res.status(401).json("Your account is wrong")
        return;    
    }
        var bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        var originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        if(originalPassword !== req.body.password) {
            res.status(401).json("Your account is wrong");
        return;
    }

        const accessToken = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin},
            process.env.SECRET_KEY,
            {expiresIn: '1h'}
            )
         
        const {password, ...info} = user._doc;
        res.status(200).json({...info, accessToken});
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;