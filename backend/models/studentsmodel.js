const mongoose=require('mongoose');


const studentSchema=new mongoose.Schema({
   
    studentname:{
        type:String,
        required:true,
        minlength:3
    },
    grade:{
        type:String,
        required:true,
        maxlength:15
    },
    email:{
        type:String,
        minlength:2,
        required:true
    },
    password:{
        type:String,
        minlength:2,
        required:true
    },
    subjects:{
        type:Number,
        maxlength:2,
        required:true,
    }
}
)


const Student=new mongoose.model('Student',studentSchema);


module.exports=Student;