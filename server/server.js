const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

// Config
const config = require('../config').get(process.env.NODE_ENV);

const dbConfig = {
    useNewUrlParser : true,
    useCreateIndex : true
}
mongoose.connect('mongodb://localhost:27017/lms', dbConfig);
mongoose.Promise = global.Promise;

// Custom routes
const leaveRoutes = require('./routes/leaveRoutes');
const userRoutes = require('./routes/userRoutes');

// Init app
const app = express();

app.use(bodyParser.json())
app.use(cookieParser())
app.use(logger('dev'))
app.use('/api/', leaveRoutes);
app.use('/api/', userRoutes);

app.get('/', (req,res) => {
    res.status(200).send({
        message : 'Hell yeah :P'
    })
})

const port = config.port;
app.listen(port, () => {
    console.log('Server started @ ', port)
})