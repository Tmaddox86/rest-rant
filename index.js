require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.use('/places', require('./controllers/places'))

app.listen(3000)

app.get('/', (req, res) => {
    res.status(404).send('<h1> 404 page </h1>')
})

app.get('*', (req, res) => {
    
})

app.listen(process.env.PORT)
