const express    = require('express');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago', {useMongoClient:true});
mongoose.Promise = global.Promise;


app.use(express.static('public'));
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(error, request, response, next) {
   //console.log(error);
    response.status(422).send({errorMessage: error.message});
});

// listen for requests
app.listen(process.env.port || 4000, function() {
    console.log('now listenin for requests');
})