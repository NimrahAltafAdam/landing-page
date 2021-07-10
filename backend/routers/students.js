const express=require('express');
const app=express();
const router=new express.Router();
let Student = require('../models/studentsmodel.js');



router.route('/').get((req,res)=>{
    Student.find()
    .then(custs=>res.json(custs))
    .catch(err=>res.status(400).json('Error: ' + err));
}


)

router.route('/add').post((req,res)=>{
   
    const studentname=req.body.studentname;
    const grade=req.body.grade;
    const email=req.body.email;
    const password=req.body.password
    const subjects=Number(req.body.subjects);

    const newStud= new Student({
        studentname,
        grade,
        email,
        password,
        subjects,
      })
    
      newStud.save()
      .then(() => res.json('Student added!'))
      .catch(err => res.status(400).json('Error: ' + err));
    });
    


    







module.exports=router;


