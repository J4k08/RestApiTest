const express   = require('express');
const router    = express.Router();

// get a list of ninjas from the db
router.get('/ninjas', function(request, response) {
    response.send({type: 'GET'});
});

// add a ninja to the db
router.post('/ninjas', function(request, response) {
    console.log(request.body);
    res.send({
        type: 'POST',
        name: request.body.name,
        rank: request.body.rank
    });
});

// update a ninja in the db
router.put('ninjas/:id', function(request, response) {
    console.log(request.body);
});

router.delete('ninjas/:id', function(request, response) {
    console.log(request.body);
})

module.exports = router;