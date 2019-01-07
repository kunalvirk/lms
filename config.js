const config = {
    production : {
        port : process.env.PORT,
        secret : process.env.SECRET_KEY,
        db : process.env.MONGODB_URI
    },
    developement : {
        port : 3001,
        secret : 'EKCS@342',
        db : 'mongodb://localhost:27017/lms'
    }
}

exports.get = (env) => {
    return config[env] || config.developement
}