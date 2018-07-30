const app = require('./UnitTasks.js');
var output;
function makeAlcohol(a,cb) {
  console.log('Got ' + a.length + ' tasks!')
  var tasksReady = 0;
  var tasksLeft = a.length;
  packs = [];
  a.map(function(x,i) {
    //x(function(pack) {console.log(pack)});
    //console.log(i+1 + ' task is ready', a.length-i-1 + ' is left!')
    x(function(pack) {
      console.log(pack);
      tasksReady = tasksReady + 1;
      tasksLeft = tasksLeft - 1;
      console.log(tasksReady + ' task is ready', tasksLeft + ' is left!');
      cb(pack, packs);
    });
  });
  setTimeout(function() {console.log(packs)}, 10000);
};

makeAlcohol([app.makeWine, app.makeBeer, app.makeWine], packPacker);

function packPacker(inA, outA) {
  outA.push(inA);
  console.log(outA);
};
