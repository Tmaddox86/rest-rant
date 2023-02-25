require('dotenv').config()
const mongoose = require('mongoose')
const router = require('express').Router()
const db = require('../models')

/*router.get('/', (req, res)=> {
    db.Place.find()
    .then((places)=>{
        res.render('places/index', { places})
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(()=>{
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  }) */  

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')