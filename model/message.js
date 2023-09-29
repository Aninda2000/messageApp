const mongoose =require('mongoose');
const messageSchema=new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    description:{
        type:String
    }
},{
    timestamps:true
});

const message =mongoose.model('messages',messageSchema);
module.exports=message;