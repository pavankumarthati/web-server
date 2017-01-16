var express = require('express');
var app = express();
var PORT = 3000; // it is constant if specified in uppercase
// adding middleware to the webapp
// there are two different types of middleware are present.
// 1. app level middleware (i.e middleware gets called for all pages and routes)
// 2. route level middleware (i.e middleware gets called for specific routes)
var middleware = {
  requireAuthentication: function (req, res, next) {
      console.log('authentication granted');
      next();
  },
  logger : function (req, res, next) {
      console.log("time: " + new Date().toString() + ", request: " + req.method + " " + req.originalUrl);
      next();
  }
};
app.use(middleware.logger); // app level middleware
app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('About Us');
});

app.use(express.static(__dirname + "/public"));
app.listen(PORT, function () {
    console.log('server listens on ' + PORT);
});