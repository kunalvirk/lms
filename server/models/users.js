const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config').get(process.env.NODE_ENV)

/* TODO: Define user
 * 0 : Can only apply leave
 * 1 : Can approve leave
 * 2 : Can view leave data and add employess
 * 3 : Super admin
*/

const userSchema = mongoose.Schema({
    empId : {
        type : Number,
        required : true
    },
    firstName : {
        type:String,
        required : true
    },
    lastName :  {
        type:String,
        required : true
    },
    contactNo : Number,
    email :  {
        type:String,
        required : true,
        unique : 1
    },
    reportingManagers : {
        type : Array,
        required : true
    },
    gender :  {
        type:String,
        required : true
    },
    address :  {
        type:String,
        required : true
    },
    city :  {
        type:String,
        required : true
    },
    country :  {
        type:String,
        required : true
    },
    dob :  {
        type:String,
        required : true
    },
    department :  {
        type:String,
        required : true
    },
    subDepartment :  {
        type:String,
        required : true
    },
    password :  {
        type:String,
        required : true
    },
    token : String,
    userType : {
        type : Number,
        default : 0
    }
}, {
    timestamps : true
})


userSchema.methods.comparePassword = function(clientPassword, cb) {
    console.log(this)
    bcrypt.compare(clientPassword, this.password, (err, isMatch) => {
        if (err) return cb(err)
        cb(null, isMatch)
    })
}


userSchema.methods.generateToken = function(cb) {
    let user = this;
    let token = jwt.sign({id:user._id.toHexString(),email : user.email,name:user.firstName}, config.secret)

    user.token = token;

    user.save((err, user) => {
        if (err) return cb(err);
        cb(null, user);
    })
}

userSchema.statics.findByToken = function(token, cb) {
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return cb(err, null)
        } 
        User.findOne({"_id":decoded.id}, (err, user) => {
            if (err) return cb(err);
            return cb(null, user);
        })
    })
}


userSchema.methods.deleteToken = function (token, cb) {
    let user = this;
    user.update({$unset : {token : null}}, (err, user) => {
        if (err) return cb(err);
        cb(null, user);
    })
}
const User = mongoose.model('User', userSchema);

module.exports = User;