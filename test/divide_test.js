var assert = require('assert');
var divide = require('../divide');

describe("divide",function(){
  it("takes two numbers as parameters, and can divide them",function(){
    var result = divide(10, 2);
    assert.equal(result,5);
  });
});
