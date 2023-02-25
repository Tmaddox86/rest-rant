const mongoose = require('mongoose')

//const { Schema } = mongoose

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true},
    pic: { type: String, default: 'http://placekitten.com/350/350'},
    cuisines: { type: String, required: true},
    city: { type: String, default: 'Anytown'},
    state: { type: String, default: 'USA'},
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?!'],
        max: [new Date().getFullYear(),'Hey, this year is in the picture!']
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
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
    if (!req.body.pic){
        req.body.pic = 'http://placekitten.com/400/400'
    }
    db.Place.create(req.body)
    .then(()=>{
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  }) */                                     

placeSchema.methods.showEstablished = function(){
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}
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
