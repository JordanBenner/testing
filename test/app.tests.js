var expect = require('chai').expect;
var main = require('../main');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('return -1 when value is not present', function() {
      expect(-1).to.equal([1,2,3].indexOf(4));
    });
    it('return index when value ispresent', function() {
      expect(0).to.equal([1,2,3].indexOf(1));
    });
  });
});

describe('Main.js', function() {
  it('Age Calc', function() {
    var number = main.calc_age('35');
    expect(12775).to.equal(number);
  });
});
