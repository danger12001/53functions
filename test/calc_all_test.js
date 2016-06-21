var assert = require('assert');
var calc_all = require('../calc_all');

describe("calc_all",function(){
  it("takes two numbers and a symbol as parameters, and can do math to them",function(){
    var result = calc_all(10,"*",5);
    assert.equal(result,50);
  });
});
