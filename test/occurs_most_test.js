var assert = require('assert');
var occurs_most = require('../occurs_most');

describe("occurs_most",function(){
  it("should take a sentence as a parameter and returns the letter that occurs the most",function(){
    var result = occurs_most("I like big cups of coffee for energy");
    assert.equal(result,"e");
  })
});
