const express=require('express');
const jsonServer=require('json-server');
const chokidar=require('chokidar');
const cors=require('cors');

const fileName=process.argv[2] || "./data.js";
const port=process.argv[3] || 3500;
const app=express();
let router=undefined;

const createServer=()=>{
    delete require.cache[require.resolve(fileName)];
    setTimeout(()=>{
        router=jsonServer.router(fileName.endsWith(".js")?require(fileName)():fileName);
        // router=jsonServer.router()
},100);
}

createServer();

app.use(cors());
app.use(jsonServer.bodyParser);
app.use('/api',(req,res,next)=>router(req,res,next));

chokidar.watch(fileName).on("change",()=>{
    console.log("Reloading web Service data");
    createServer();
    console.log("Reloading web servcie data complete")
});

app.listen(port,()=>console.log(`web service running on port ${port}`));