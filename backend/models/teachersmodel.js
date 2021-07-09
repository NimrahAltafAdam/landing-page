const mongoose=require("mongoose");


const teacherSchema= new mongoose.Schema({

teachername:{
    type:String,
    minlength:3,
    required:true,
},
temail:{
    type:String,
    minlength:3,
    required:true,
},
tpassword:{
    type:String,
    minlength:3,
    required:true,
},
tsubjects:{
    type:Number,
    minlength:3,
    required:true,
}


})

const Teacher=mongoose.model('Teacher',teacherSchema);

module.exports=Teacher;