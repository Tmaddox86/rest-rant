//Modules and Globals
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const MONGO_URI = process.env.MONGO_URI;
const mongoose = require('mongoose')
const placesController = require('./controllers/places')
// Express Settings
app.set('views', __dirname + '/views');
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
      console.log(`connected to MONGO ${MONGO_URI}`);
    }
  );
  
// Controllers & Routes
app.use('/places', placesController);

app.get('/', (req, res) => {
    res.render('home')
});

app.get('*', (req, res) => {
    res.render('error404')
});
const PORT = process.env.PORT
// Listen for Connections
app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
});

/*app.listen(process.env.PORT)*/


