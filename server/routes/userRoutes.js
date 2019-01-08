const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const saltRounds = 10;

// Leaves models
const User = require('../models/users');

// Middlewares
const auth = require('../middlewares/auth');

router.get('/users', auth, (req, res) => {
    User.find({}, (err, users) => {
        if (err) return res.status(500).json({
            success : false,
            message : 'Something went wrong'
        })
        res.status(200).json({
            success : true,
            message : 'List of all users...',
            users : users
        })
    })
})


// User register/signup
router.post('/user/signup', (req, res) => {
    
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (err) {
            return res.status(500).json({
                success : false,
                message : 'Can\'t create user',
                error : err
            })
        }
        const user = new User({
            empId : req.body.empId,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            contactNo : req.body.contactNo,
            email : req.body.email,
            reportingManagers : req.body.reportingManagers,
            gender : req.body.gender,
            address : req.body.address,
            city : req.body.city,
            country : req.body.country,
            dob : req.body.dob,
            department : req.body.department,
            subDepartment : req.body.subDepartment,
            password : hash,
            token : req.body.token,
            userType : req.body.userType
        })

        user.save()
        .then(response => {
            res.status(201).json({
                success : true,
                message : 'User created',
                user : response
            })
        })
        .catch(err => {
            res.status(500).json({
                success : false,
                message : 'Can\'t create user',
                error : err
            })
        })
        
    })

})


// User login
router.post('/user/login', (req, res) => {
    User.findOne({'email': req.body.email}, (error, user) => {
        if (!user) {
            return res.json({isAuth : false, message : 'User not found, check your email',error : error})
        }
            user.comparePassword(req.body.password,(err,isMatch)=>{
                if(!isMatch) return res.json({
                    isAuth:false,
                    message:'Wrong password'
            });

            user.generateToken((err, user) => {
                if (err) {
                    return res.status(500).json({
                        isAuth : false,
                        message : 'Server error, please try again later',
                        error : err
                    })
                }
                res.cookie('auth', user.token).status(200).json({
                    isAuth : true,
                    message : 'Logged in...',
                    id : user._id,
                    email : user.email,
                    userType : user.userType
                })
            })

        })
    })
})


// User logout
router.get('/user/logout', auth, (req, res) => {
    req.user.deleteToken(req.token, (err, success) => {
        if (err) return res.status(500).json({
            success : false,
            message : "Something went wrong"
        })
        res.status(200).json({
            success : true,
            message : "Logged out successfully"
        })
    })
})

// Authenticate a user
router.get('/user/auth',auth, (req,res) => {
    // console.log("auth req",req.user)
    res.status(200).json({
        isAuth : true,
        id : req.user._id,
        email : req.user.email,
        userType : req.user.userType,
        reportingManagers : req.user.reportingManagers
    })
})

module.exports = router;