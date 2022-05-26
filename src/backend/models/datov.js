const mongoose =require("mongoose");
const { Schema, model } = mongoose;


const  datoVSchema = new Schema({

    _id:{
        type:String,
        required:true
    
    },
    val:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
},
{timestamps:true}
);

module.exports = model('datoV',datoVSchema);