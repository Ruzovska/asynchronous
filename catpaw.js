const app = require('./UnitTasks.js');

function makeAlcohol(x) {
  x.map(function(x) {
    x(console.log);
  });
};

makeAlcohol([app.makeBeer, app.makeWine]);
