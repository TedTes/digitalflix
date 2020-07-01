const path =require('path');
require('dotenv').config({path:'../ecom_config.env'});
require('dotenv').config();
const express=require('express');
const {connectToDB,insertOrders,register,login,ordersList}=require('./Database.js')
const cors=require('cors');
const app=express();


app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// app.use('/api',(req,res,next)=>router(req,res,next));

( function(){
 connectToDB();
})();
app.get('/',(req,res)=>{
    console.log("home page");
})
app.post('/',(req,res)=>{
    // console.log("from post")
    // console.log(req.body);
})
app.post('/api/orders',(req,res)=>{
    insertOrders(req.body)
})
app.post('/api/register',async (req,res)=>{
 res.send(await register(req.body)) ;
})
app.get('/api/orderslist',async (req,res)=>{
    res.send(await ordersList());
})

app.post("/api/login",async (req,res)=>{
res.send(await login(req.body));
    });

const port=3000 || process.env.PORT;
app.listen(port,()=>console.log(`web service running on port ${port}`));