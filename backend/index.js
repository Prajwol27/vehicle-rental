const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const authRouter = require('./Routes/Authrouter')


require('dotenv').config();
require('./Models/db');



app.get('/ping', (req,res) => {
    res.send('PONG');
});


app.listen( process.env.PORT , (err) => {
    if (err) console.log(err);
    console.log(`running at port ${process.env.PORT}`);
  });