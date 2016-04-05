var assert = require('assert');
var occurs_least = require('../occurs_least');

describe("occurs_least",function(){
  it("should take a sentence as a parameter and returns the letter that occurs the least",function(){
    var result = occurs_least("I like big cups of coffee for energy");
    assert.equal(result,"");
  });
});
