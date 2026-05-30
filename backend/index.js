const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors());
app.use(express.json());
require('dotenv').config();


const connectDB=require('./config/db');
connectDB();
const userroutes=require('./routes/userroutes');
const notificationroutes=require('./routes/notificationroutes');

app.use('/',userroutes);
app.use('/',notificationroutes);

app.listen(5000,()=>{
    console.log(`Server is running on port 5000`);
});

app.get('/',(req,res)=>{
    res.send('Hello iam lasya-2300030060')
})


