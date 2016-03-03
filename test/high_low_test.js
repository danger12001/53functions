var assert = require('assert');
var high_low = require('../high_low');

describe("high_low", function(){
  it("should take a list of numbers as a parameter and returns the highest and lowest numbers in the list", function(){
    var result = high_low(5,6,7,8);
    assert.equal(result,(8,5));
  });
});
