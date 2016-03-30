var assert = require('assert');
var start = require('../start');

describe("start",function(){
  it("should take a sentence as a parameter and returns the letter most words starts with",function(){
    var result = start.start("mighty brown mushrooms grow in the mud");
    assert.equal(result,"m");
  })
});
