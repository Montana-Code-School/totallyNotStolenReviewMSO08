const chai = require('chai');
var date = require('../date.js') ;
var expect = chai.expect;
chai.use(require('../node_modules/chai-datetime/chai-datetime.js'));

describe("Return the time every few seconds", function() {
  it("return just the time", function() {
    var testDate = date();
    expect(testDate).to.equalTime
  })
  it("returns the time every three seconds", function() {
    
  })
})
