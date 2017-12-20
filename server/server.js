const express = require('express');
const app = express();
const port = 12386;

let cars = ['Chevelle', 'Datsun 500', 'Pinto', 'Tesla', 'PT Cruiser', 'Waterboat Car Thing'];

app.use(express.static('server/public'));

app.listen(port, function(){
    console.log('server is up on: ', port);
});

app.get('/cars',function(req, res){
    console.log('/cars get hit');
    res.send(cars);
}); //end get cars