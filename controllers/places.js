const router = require('express').Router()

router.get('/', (req, res)=> {
    res.send('GET /places')
})

let places = [{
    name: ,
    city: ,
    state: ,
    cuisines: ,
    pic: ,
}]
res.render('places/index', { places })

router.post('/', (req, res) => {
    res.send('POST /places stub')
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




