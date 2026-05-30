const mongoose=require('mongoose');

const connectDB=()=>{
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected successfully`);

    }
    catch(err){
        console.log(`Error`);
    }
}

module.exports=connectDB