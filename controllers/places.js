const router = require('express').Router()
const places = require('../models/places.js')
const React = require('react')
const db = reqiure("../models")

router.get('/new', (req, res) => {
  res.render('places/new')
});
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(()=>{
      res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == "ValidationError"){
        let message = "Validation Error:";
        for (var field in err.errors) {
          message +=`${field} was ${err.errors [field].value},`;
          message +=`${err.errors [field].message}`;
        }
      console.log('Validation error message', message)
      res.render("places/new", { message});
      }
      else{
      res.render('error404')
      }
    })
});

router.get('/', (req,res)=> {
  db.Place.find()
    .then((places) =>{
      res.render("places/index", {places})
    })
    .catch((err) => {
      console.log(err)
      res.render("Error")
    })
});

router.get("/:id/edit", (req, res) => {
  db.Place.findById( req.params.id)
  .then((place) => {
    res.render("places/edit", {place})
  })
  .catch((err) => {
    console.log(err)
    res.render("Error")
  })
});

router.get('/:id', (req, res)=> {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then((place)=>{
    console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
});

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate({_id: req.params.id}, req.body)  
    .then(() => {
      res.redirect(`/places/${req.params.id}`)
    })
    .catch((err) => {
      console.log(err)
      res.render("Error")
    })
});

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(() => {
    res.status(303).redirect('/places')
    })
    .catch((err) => {
      console.log(err)
    res.render('Error')
  })
});

router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  req.body.rant = (req.body.rant)
  db.Place.findById(req.params.id)
  .then((place) => {
    db.Comment.create(req.body)
    .then(comment => {
      place.comments.push(comment.id)
      place.save().then(()=> {
        res.redirect(`/places/${req.params.id}`)
      })
    })
    .catch((err) => {
      res.render('error404')
    })
  })
  .catch((err) => {
    res.render('error404')
  })
});

router.delete('/:id/comment/:rantId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.rantId)
  .then(() =>{
    res.redirect(`places/${req.params.id}`)
  })
  .catch((err) =>{
    console.log("PLACE", err)
    res.render('Error404')
  })
});


module.exports = router

/*router.get('/places', (req,res) => {
  res.render('/places')
});
                                   
router.post('/:id/edit', (req, res) => {
  res.render('GET /places/:id/rantId');
});

router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
      .then(() => {
      res.status(303).redirect('/places')
      })
      .catch((err) => {
        console.log(err)
      res.render('Error')
    })
});*/







