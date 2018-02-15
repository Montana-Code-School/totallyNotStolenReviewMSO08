const chai = require('chai');
var array = require('../array.js') ;

var expect = chai.expect;
describe("capitalizing the first letter of each word in an array", function() {
  it("should return the passed array array", function() {
    var arr = ["dock", "of", "the", "hamburger"];
    var pushedArray = array(arr);
    expect(pushedArray.length).to.eql(4);
  })
  it("is the first string in the array capitalized?", function() {
    var arr = ["dock", "of", "the", "hamburger"];
    var pushedArray = array(arr);
    expect(pushedArray[0]).to.eql("Dock");
  })
  it("should return all the array with capatalized first letters", function() {
    var arr = ["dock", "of", "the", "hamburger"];
    var pushedArray = array(arr);
    expect(pushedArray[0]).to.eql("Dock");
    expect(pushedArray[1]).to.eql("Of");
    expect(pushedArray[2]).to.eql("The");
    expect(pushedArray[3]).to.eql("Hamburger");
  })
})
