const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');

const User=require("../models/User");

//register a user

router.post('/register',async(req,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    const salt=bcrypt.hash(10,genSalt);
    const hashedpass=bcrypt.hash(user.password,salt);

    user.password=hashedpass;   //also implemneted hashing of password.
    if(!user.name||user.email||user.password){
        res.send(`Please fill the required details correctly`);
    }

    else{
        User.save(user);
        res.json(`User registered Successfully`);
    }
});

//login a user.

router.post('/login',async(req,res)=>{
    const found=User.find();
    if(!found){
        res.send(`Please register immediately`);
    }
    else{
        res.send(`User logged In Successfully`);
    }
})

module.exports=router;
