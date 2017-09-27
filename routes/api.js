const express   = require('express');
const router    = express.Router();
const Ninja     = require('../models/ninja');

// get a list of ninjas from the db
router.get('/ninjas', function(request, response, next) {

    // Get all ninjas
    /*Ninja.find({}).then(function(promise){
        response.send(promise);
    });*/
    Ninja.geoNear(
        {type:"Point", coordinates: [parseFloat(request.query.lng), parseFloat(request.query.lat)]},
        {maxDistance: 100000, spherical: true}


    ).then(function(promise) {
        response.send(promise);
    });
});

// add a ninja to the db
router.post('/ninjas', function(request, response, next) {

    Ninja.create(request.body).then(function(promise) {
        response.send(promise);
    }).catch(next)
});

// update a ninja in the db
router.put('/ninjas/:id', function(request, response, next) {
    Ninja.findByIdAndUpdate({_id: request.params.id}, request.body).then(function(promise){
        Ninja.findOne({_id: request.params.id}).then(function(promise) {
            response.send(promise);
        })

    })
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(request, response, next) {
    Ninja.findByIdAndRemove({_id: request.params.id}).then(function(promise) {
        response.send(promise);
    });
})

module.exports = router;