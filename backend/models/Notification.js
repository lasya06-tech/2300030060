const mongoose=require('mongoose');

const Notification=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    timestamp:{
        type:String,
        required:true
    }
});

exports.module=new mongoose.model('Notification',Notification);