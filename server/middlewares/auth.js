const User = require('../models/users');

const auth = (req, res, next) => {
    let token = req.cookies.auth;
    if (!token) {
        return next(res.status(403).json({
            message : 'Not Authorised, enter your credentials and try again'
        }))
    } else {
        User.findByToken(token, (err, user) => {
            if (err) return next(err)
            if (!user) {
                return res.status(403).json({
                    isAuth: false,
                    message : 'Can\'t access this route'
                })
            }
            req.token = token;
            req.user = user;
            next();
        })
    }
}

module.exports = auth;