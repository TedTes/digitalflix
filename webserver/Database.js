require('dotenv').config();
const mongoose=require('mongoose');
// const {MongoClient}=require('mongodb')

 
const userSchema=new mongoose.Schema({
    name:String,
    password:String,
    email:String,
    id:String
});
const orderSchema=new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    city:String,
    zip:String,
    country:String,
    products:{
        quantity:Number,
        product_id:Number
    },

})

const User= mongoose.model('user',userSchema)
const Order=mongoose.model('order',orderSchema)
async function connectToDB(url){
    try{

        mongoose.connection=await mongoose.connect(url, {
           useNewUrlParser: true,
           useUnifiedTopology: true
});
    }
    catch(err){
        console.log("not connected")
console.log(err)
    }
 
  
}

async function insertOrders(orders)
{  
    try{
        const order=new Order(orders);
        order.save();
    }
    catch(e){
console.log("error in database saving orders"+e);
    }

}
 

async function register(account){
//  await db.collection("users").insertOne(account);
const user=await new User(account);
try{
    return user.save();
}
  catch(err){console.log("console.log"+err)}
    
}
async function login(account){
 try{
    if( await User.findOne({name:account.name,password:account.password}))
    {
        if(account.name==="Admin")
        return ({name:account.name,valid:true,roles:"Admin"})
        else return ({name:account.name,valid:true,roles:"user"})
    }
     else{
        return({valid:false})
    }
 }
 catch(err){
     console.log("database error"+err)
 }}
async function ordersList(){
   const result=await Order.find({});
   return result;
}
module.exports={connectToDB,insertOrders,register,login,ordersList}