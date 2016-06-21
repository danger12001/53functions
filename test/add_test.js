var assert = require('assert');
var add = require('../add');

describe("add",function(){
  it("takes two numbers as parameters, and can add them",function(){
    var result = add(10, 5);
    assert.equal(result,15);
  });
});
