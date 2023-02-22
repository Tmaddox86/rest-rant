const mongoose = require('mongoose')

//const { Schema } = mongoose

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true},
    pic: String,
    cuisines: { type: String, required: true},
    city: { type: String, default: 'Anytown'},
    state: { type: String, default: 'USA'},
    founded: Number
})

/*mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true},
    ()=> {console.log('connected to mongo:', process.env.MONGO_URI)}),*/

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
  
const Place= mongoose.model("Place", placeSchema)
module.exports= Place
















/*module.exports = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg'
}]*/
