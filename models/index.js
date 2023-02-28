require('dotenv').config()
const mongoose = require('mongoose')
const router = require('express').Router()
const db = require('../models')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
},() => {
    console.log("MONGO ALIVE")
});

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')