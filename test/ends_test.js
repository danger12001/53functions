var assert = require('assert');
var ends = require('../ends');

describe("ends", function(){
  it("should take a sentence as a parameter and returns the letter most words end with", function(){
    var result = ends("this is an epic sentence");
    assert.equal(result,"s");
  });
});
