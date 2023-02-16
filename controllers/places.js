const router = require('express').Router()

router.get('/', (req, res)=> {
    res.send('GET /places')
})

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
        
res.render('places/index')
        })
router.post('/', (req, res) => {
    res.send('POST /places stub')
})
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
router.get('/new', (req, res) => {
    res.send('GET /places/new stub')
})
router.get('/:id', (req, res) => {
    res.send('GET /places/:id stub')
})
router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})
router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})
router.get('/:id/edit', (req, res) => {
    res.send('GET /places/:id/edit stub')
})
router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router




