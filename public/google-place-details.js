const axios = require('axios');

module.exports = function(app, db) {
    app.get('/googleplace/:id', (req, res) => {

        axios.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' + req.params.id + '&key=YOUR_APPLICATION_KEY')
            .then(function(response) {

                if (response.data.status == "OK") {
                    res.send(response.data.result);
                } else {
                    res.status(400).send("Error");
                }
            })
            .catch(function(error) {
                res.status(500).send("There was an error!");
            });
    });
};