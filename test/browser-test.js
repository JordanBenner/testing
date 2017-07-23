var chai = require('chai');
var main = require('../main');
var expect = chai.expect;
var webdriverio = require('webdriverio');

describe('my webdriverio tests', function() {
  this.timeout(60000);
  var client;

  before(function(){
    client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
    return client.init();
  });

  describe('Main.js', function() {
    it('Age Calc', function() {
      var number = main.calc_age('35');
      expect(12775).to.equal(number);
    });
  });


  // it('Github test',function() {
  //     return client
  //       .url('https://github.com/')
  //       .getElementSize('.header-logo-invertocat .octicon.octicon-mark-github').then(function (result) {
  //           expect(result.height).to.equal(32);
  //           expect(result.width).to.equal(32);
  //       })
  //       .getTitle().then(function (title) {
  //           expect(title).to.contain('The world\'s leading software');
  //       })
  //       .getCssProperty('a[href="/pricing"]', 'color').then(function (result) {
  //           expect(result.value).to.equal('rgba(255,255,255,1)');
  //       });
  // });
  //
  // after(function() {
    return client.end();
  });
});
