const MONGO_URI = process.env.MONGO_URI
const mongoose = require('mongoose')
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const jsxEngine = require("express-react-views").createEngine()
const placesController = require('./controllers/places')
const PORT = process.env.PORT;

// Express Settings
//app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

mongoose.connect(
    
    MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
    
    }
  );
   
// Controllers & Routes

app.get('/', (req, res) => {
    res.render('home')
});
app.get('*', (req, res) => {
    res.render('error404')
});
// Listen for Connections
app.listen(PORT,() => {
  console.log(PORT);
});

app.listen(process.env.PORT)


//const MONGO_URI = process.env.MONGO_URI;
//const mongoose = require('mongoose')
//app.use('/places', require ('./controllers/places'));