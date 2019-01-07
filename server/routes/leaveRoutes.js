const express = require('express');
const router = express.Router();

// Leaves models
const Leave = require('../models/leaves');

router.get('/leave', (req, res) => {
    res.status(200).send({
        message : 'Apply Leave route'
    })
})

router.post('/leave/applyLeave', (req, res) => {
    const leaveDetail = new Leave(req.body);
    leaveDetail.save(leaveDetail)
         .then(response => res.status(201).json({success : true, leaveDetail : response}))
         .catch(err => res.status(500).json({success:false, error : err}))
})


module.exports = router;