const app = require('./UnitTasks.js');

function makeAlcohol(a) {
  console.log('Got ' + a.length + ' tasks!')
  a.map(function(x,i) {
    //x(function(pack) {console.log(pack)});
    //console.log(i+1 + ' task is ready', a.length-i-1 + ' is left!')
    x(function(pack) {
      console.log(pack);
      console.log(i+1 + ' task is ready', a.length-i-1 + ' is left!');
    });
  });
};

makeAlcohol([app.makeBeer, app.makeWine]);
