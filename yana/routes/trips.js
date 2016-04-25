util = require('util');
exports.index = function(req, res) {
  res.render('index', { title: 'Index Page of Trip Planner' });
};

exports.maps = function(req, res) {
  //res.render('index', { title: util.format('Hello %s, we are proposing a trip...', req.query.user) });
  res.render('maps');
  console.log(req);
};
