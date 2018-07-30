const app = require('./UnitTasks.js');

function makeAlcohol(a,cb) {
  var tasksReady = 0;
  var tasksLeft = a.length;
  packs = [];
  a.map(function(x) {
    x(function(pack) {
      tasksReady += 1;
      tasksLeft -= 1;
      packs.push(pack);
      if (tasksLeft === 0) {
        cb(packs);
      };
    });
  });
};

makeAlcohol([app.makeWine, app.makeBeer, app.makeWine], console.log);
