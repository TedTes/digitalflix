require('dotenv').config();
const {MongoClient}=require('mongodb')

let db;
async function connectToDB(url){
    // const DB_URL='mongodb+srv://Admin:admin&321@cluster0-9zj1s.mongodb.net/digitalflix?retryWrites=true&w=majority'
    try{
        const client=await MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
        db=client.db("digitalflix")
    }
    catch(err){
        console.log("not connected")
console.log(err)
    }
 
  
}

async function insertOrders(orders)
{
    console.log(orders);
   
    await db.collection("orders").insertOne(orders)
}
 

async function register(account){
 await db.collection("accounts").insertOne(account);
    
}
async function login(account){
    console.log(process.env.DB_URL)
    console.log("from db")
    console.log(account)
    if( await db.collection("accounts").findOne({name:account.name,password:account.password}))
    {
        if(account.name==="Admin")
        return ({name:account.name,authenticated:true,roles:"Admin"})
    }
    else{
        return({authenticated:false})
    }
    
}
async function ordersList(){
   const result=await db.collection("orders").find({}).toArray();
   return result;
}
module.exports={connectToDB,insertOrders,register,login,ordersList}