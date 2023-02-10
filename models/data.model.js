const mongoose = require('mongoose');


//Schema define

const dataSchema = new mongoose.Schema({
nums : {
    type : Array,
   
},
result:{
    type:Number,  
}

})

module.exports = mongoose.model('input',dataSchema);