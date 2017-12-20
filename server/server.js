const express = require('express');
const cars = require('./modules/cars')
const app = express();
const port = 12386;

app.use(express.static('server/public'));

app.listen(port, function(){
    console.log('server is up on: ', port);
});

app.get('/cars',function(req, res){
    console.log('/cars get hit');
    res.send(cars.randomCar());
}); //end get cars