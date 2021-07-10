const express=require('express');
const app=express();

const router=new express.Router();
let Teacher=require("../models/teachersmodel.js");




router.route('/').get((req,res)=>{
  Teacher.find()
  .then(tech=>res.json(tech))
  .catch(err=>res.status(400).json('Error: ' + err))
 

})

router.route('/add').post((req,res)=>{
 

    const teachername=req.body.teachername;
    const temail=req.body.temail;
    const tpassword=req.body.tpassword;
    const tsubjects=Number(req.body.tsubjects);



    const newTech=new Teacher({
         teachername,
         temail,
         tpassword,
         tsubjects,

    })
   

    newTech.save()
    .then(() => res.json('Teacher added!'))
      .catch(err => res.status(400).json('Error: ' + err));
})


module.exports=router;