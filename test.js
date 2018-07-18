const unitTasks = require('./UnitTasks.js');
const assert = require('assert');

describe('makeWine', function() {
  it('pack of wine', function(done) {
    unitTasks.makeWine(function(pack) {
      var a = JSON.stringify(pack);
      assert.equal(JSON.stringify({amount: 5, what: 'wine'}), a);
      done();
    });
  });
});

describe('makeBeer', function() {
  it('pack of beer', function(done) {
    unitTasks.makeBeer(function(pack) {
      var a = JSON.stringify(pack);
      assert.equal(JSON.stringify({amount: 6, what: 'beer'}), a);
      done();
    });
  });
});

describe('packageAlcohol', function() {
  it('delivery of wine', function(done) {
    unitTasks.packageAlcohol({amount: 5, what: 'wine'}, function(pack) {
      var a = JSON.stringify(pack);
      assert.equal(JSON.stringify({serial: 0, contents: {amount: 5, what: 'wine'}}), a);
      done();
    });
  });
});
