const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT, 
    {useNewUrlParser: true},
    () => console.log('connected to db!')
);



//import routes
const authRoute = require ('./routes/auth')
const postRoute = require('./routes/posts')

//Middleware
app.use(express.json());

//Route middlewares
app.use('/api/user' , authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('Server Up and running'));