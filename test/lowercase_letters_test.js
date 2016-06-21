var assert = require('assert');
var lowercase_letters = require('../lowercase_letters');

describe("lowercase_letters",function(){
  it("should take a sentence as a parameter and returns all the lowercase letters that occurs",function(){
    var result = lowercase_letters("There are Capital Letters");
    assert.deepEqual(result,['h','e','r','e','a','r','e','a','p','i','t','a','l','e','t','t','e','r','s']);
  });
});
