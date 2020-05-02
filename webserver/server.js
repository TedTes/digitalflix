const express=require('express');
const jsonServer=require('json-server');
const {connectToDB,insertOrders,register,login}=require('./Database.js')

const cors=require('cors');
const port=process.argv[3] || 3500;
const app=express();

app.use(cors());
app.use(jsonServer.bodyParser);
// app.use('/api',(req,res,next)=>router(req,res,next));

(async function(){
    await connectToDB();

})();
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.post('/api/orders',(req,res)=>{
    insertOrders(req.body)
})
app.post('/api/register',(req,res)=>{
    register(req.body);
})

app.post("/api/login",async (req,res)=>{
    console.log("from app server")
    
   res.send(await login(req.body));
    
})

// chokidar.watch(fileName).on("change",()=>{
//     console.log("Reloading web Service data");
//     createServer();
//     console.log("Reloading web servcie data complete")
// });

app.listen(port,()=>console.log(`web service running on port ${port}`));