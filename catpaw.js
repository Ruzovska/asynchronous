const app = require('./UnitTasks.js');

function makeAlcohol(a) {
  console.log('Got ' + a.length + ' tasks!')
  var tasksReady = 0;
  var tasksLeft = a.length;
  a.map(function(x,i) {
    //x(function(pack) {console.log(pack)});
    //console.log(i+1 + ' task is ready', a.length-i-1 + ' is left!')
    x(function(pack) {
      console.log(pack);
      tasksReady = tasksReady + 1;
      tasksLeft = tasksLeft - 1;
      console.log(tasksReady + ' task is ready', tasksLeft + ' is left!');
    });
  });
};

makeAlcohol([app.makeWine, app.makeBeer, app.makeWine]);
