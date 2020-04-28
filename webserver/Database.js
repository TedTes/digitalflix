const {MongoClient}=require('mongodb')

let db;
async function connectToDB(){
    try{
        const client=await MongoClient.connect('mongodb+srv://Admin:admin&321@cluster0-9zj1s.mongodb.net/digitalflix?retryWrites=true&w=majority',{useNewUrlParser:true});
        db=client.db("digitalflix")
    }
    catch(err){
console.log(err)
    }
 
  
}

async function insertOrders(orders)
{
   
    await db.collection("orders").insertOne(orders)
}
 

async function register(account){
 await db.collection("accounts").insertOne(account);
    
}
async function login(account){
    console.log("from db")
    console.log(account)
    if( await db.collection("accounts").findOne({name:account.name,password:account.password}))
    {
        return ({name:account.name,authenticated:true})
    }
    else{
        return({authenticated:false})
    }
    
}
module.exports={connectToDB,insertOrders,register,login}