const express=require('express');
const router=express.Router();

const Notification=require('../models/Notification');

//post a notification

router.post('/notification',async(req,res)=>{
    const notify=new Notification({
        id:req.body.id,
        type:req.body.type,
        message:req.body.message,
        timestamp:req.body.timestamp
    });

    if(!Notification.id||!Notification.type||!Notification.message||!Notification.timestamp){
        res.send(`Please fill all the details`);
    }

    else{
        const res=Notification.save(notify);
    }
});

module.exports=router;