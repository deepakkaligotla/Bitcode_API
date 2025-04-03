require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
var bodyParser = require('body-parser')
const path = require('path')

const app = express();

const twilio = require('./routes/twilio_api')
const signupApi = require('./routes/signup_api')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use(express.json({ limit: '20mb' }))
app.use(express.static('images'))

app.use((request, response, next)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.json({ limit: "10mb" }));
app.use(twilio)
app.use(signupApi)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use("*", (req, res) => {
    res.status(404).json({
      success: "false",
      message: "Page not found",
      error: {
        statusCode: 404,
        message: "You reached a route that is not defined on this server",
      },
    });
  }); 
  
module.exports = app;