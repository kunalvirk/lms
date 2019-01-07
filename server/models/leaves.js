const mongoose = require('mongoose');

const leaveModel = mongoose.Schema({
    leaveType : {
        type : String,
        required : true
    },
    leaveFromDate : String,
    leaveToDate : String,
    leaveDescription : String,
    appliedBy : String,
    leaveStatus : Number,
    approvedBy : String,
    approvedDate : String,
    viewed : Number,
}, {timestamps : true})


const Leave = mongoose.model('Leave', leaveModel);


module.exports = Leave;