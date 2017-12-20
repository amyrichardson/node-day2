## Requests
- Get: receiving something from the server; default request (if you don't tell it which one, it'll assume get)
- Post: sending data to the server

## Creating a new route for app
- server.js: app.get('/routeName', function(req, res){
    console.log('/cars get hit');
    res.send('purr');
});
