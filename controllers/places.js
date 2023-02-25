const router = require('express').Router()
const places = require('../models/places.js')
const React = require('react')

router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
    db.Comment.create(req.body)
    .then(comment => {
      place.comments.push(comment.id)
      place.save()
      .then(()=>{
        res.redirect(`/places/${req.params.id}`)
      })
    })
    .catch(err => {
      res.render('error404')
    })
  })
  .catch(err => {
    res.render('error404')
  })
  if (req.body.rant) {
    req.body.rant = true
  } 
  else {
    req.body.rant = false
  }
  res.send('GET /places/:id/comment stub')
})


router.get('/', (req,res)=> {
    let places = [{
            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic:'C:\Users\TMadd\code\rest-rant\public\images\OIP.jfif'
          }, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: 'C:\Users\TMadd\Downloads\bakery-cafe-coffee-shop-1995010.jpg'
          }] 
          res.send('GET /places stub')
        })

router.post('/', (req, res) => {
        if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'C:\Users\TMadd\code\rest-rant\public\images\kitty.jfif'
        }
        if (!req.body.city) {
          req.body.city = 'Anytown'
        }
        if (!req.body.state) {
          req.body.state = 'USA'
        }
        places.push(req.body)
        res.send('POST /places stub')
      })

router.get('/new', (req, res) => {
      res.render('places/new')
      })

router.get('/:id', (req, res) => {
  let id = Number( req.params.id)
  if (isNaN(id)){
    res, render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.send('GET /places/:id stub')
  }
});

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)){
      res.render('error404')
    }
    else if (!places[id]){
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
      res.render('STUB DELETE /places/:id')
    }
    })

router.get('/:id', (req, res) => {
  let id = Number( req.params.id);
  if (isNaN(id)){
    res, render('error404');
  }
  else if (!places[id]) {
    res.render('error404');
  }
  else {
    res.render('places', { place: places[id], id});
  }
});

router.delete('/:id/rant/:rantId', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)){
    res.render('error404')
  }
  else if (!places[id]){
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
    res.send('DELETE /places/:id stub')
  }
});

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub');
});

router.put('/:id', (req, res) => {
// Dig into req.body and make sure data is valid
      if (!req.body.pic) {
// Default image if one is not provided
          req.body.pic = 'C:\Users\TMadd\code\rest-rant\public\images\kitty.jfif'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }
// Save the new data into places[id]
      places[id] = req.body
      res.send('PUT /places/:id stub')
  }
)

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
})




module.exports = router





