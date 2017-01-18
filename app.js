var express = require('express');
var app = express();
var PORT = 3000; // it is constant if specified in uppercase

var middleware = require('./middleware');
app.use(middleware.logger); // app level middleware
app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('About Us');
});

app.use(express.static(__dirname + "/public"));
app.listen(PORT, function () {
    console.log('server listens on ' + PORT);
});