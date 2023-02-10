const mongoose = require('mongoose');

db = async () =>{
   try{
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log('DB connected...');
   }catch(error){
    console.log(error);
   }
}
module.exports = db;