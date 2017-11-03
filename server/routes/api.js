const express=require('express');
const router=express.Router();

const mongoose=require('mongoose');

const User=require('../models/user');

const db="mongodb://raj:raj@ds243285.mlab.com:43285/e-comm";
mongoose.Promise=global.Promise;

mongoose.connect(db,(err)=>{
    if(err){
        console.log("Error !"+err);
    }
});

router.get('/',function(req,res){
    res.send('Api Works');
});


router.get('/users',(req,res)=>{
    console.log('Request for all users:');
    User.find({})
    .exec((err,users)=>{
        if(err){
            console.log('Error retriving');
        }else{
            res.json(users);
        }

    });
});


router.get('/users/:id',function(req,res){
    console.log('Get request for single user');
    User.findById(req.params.id)
    .exec(function(err,user){
        if (err){
            console.log('Error retrieving user');
        }else{
            res.json(user);
        }
    });
});



router.get('/login/:email',function(req,res){
    var em=req.params.email;
    console.log('Get request for single user');
    User.findOne({email : em})
    .exec(function(err,user){
        if (err){
            console.log('Error retrieving user');
        }else{
            res.json(user);
        }
    });
});


router.post('/saveuser',(req,res)=>{
    console.log("Save the new user");
    var newUser=new User();
    newUser.role=req.body.role;
    newUser.first_name=req.body.first_name;
    newUser.last_name=req.body.last_name;
    newUser.user_name=req.body.user_name;
    newUser.email=req.body.email;
    newUser.password=req.body.password;
    newUser.password_confirmation=req.body.password_confirmation;

    newUser.save((err,insertedUser)=>{
        if(err){
            console.log('Error saving video');
        }else{
            res.json(insertedUser);
        }
    });
});




module.exports=router;