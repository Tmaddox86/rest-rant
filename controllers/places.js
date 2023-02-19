const router = require('express').Router()
const places = require('../models/places.js')
const React = require('react')
const Def = require('../default')


let places = [{
    name: 'Amy',
    city: 'Cleveland',
    state: 'Ohio',
    cuisines: 'Pasta',
    pic: 'https://th.bing.com/th/id/R.12a4ff7fbb6747c52f19e626532e0962?rik=9cozqsSzi%2bY8Zg&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2017%2f01%2fPasta-Desktop.jpg&ehk=6LUPdhXpJznEWTZwBhI%2f01AGLud5Sd4TbMHVhpSqwB8%3d&risl=&pid=ImgRaw&r=0,'
}]

app.get('/', (req,res)=> {
    let places = [{
            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: 'http://placekitten.com/250/250'
          }, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: 'http://placekitten.com/250/250'
          }] 
          res.render('GET /places/index stub',{places})
        })

router.post('/', (req, res) => {
        if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
          req.body.city = 'Anytown'
        }
        if (!req.body.state) {
          req.body.state = 'USA'
        }
        places.push(req.body)
        res.redirect('POST /places stub')
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
    res.render('GET /places/show',{ place: places[id], id})
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

router.get('/:id/edit', (req, res) => {
  let id = Number( req.params.id);
  if (isNaN(id)){
    res, render('error404');
  }
  else if (!places[id]) {
    res.render('error404');
  }
  else {
    res.render('places/edit', { place: places[id], id});
  }
});

router.delete('/:id/edit', (req, res) => {
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
    res.render('STUB DELETE /places/:id/edit')
  }
});

router.post('/:id/edit', (req, res) => {
    res.send('GET /places/:id/edit');
});

router.put('/:id', (req, res) => {
// Dig into req.body and make sure data is valid
      if (!req.body.pic) {
// Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }
// Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
)


  function show () {
  return (
      <Def>
        <main>
          <h1>Show Page</h1>
        </main>
      </Def>
  )
}



module.exports = router
module.exports = show




