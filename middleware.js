/**
 * Created by Pavan on 1/16/2017.
 */
// adding middleware to the webapp
// there are two different types of middleware are present.
// 1. app level middleware (i.e middleware gets called for all pages and routes)
// 2. route level middleware (i.e middleware gets called for specific routes)
module.exports = {
  requireAuthentication : function (req, res, next) {
      console.log('authentication granted');
      next();
  },
    logger : function (req, res, next) {
        console.log("time: " + new Date().toString() + ", request: " + req.method + " " + req.originalUrl);
        next();
    }
};
