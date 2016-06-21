var assert = require('assert');
var uppercase_letters = require('../uppercase_letters');

describe("uppercase_letters",function(){
  it("should take a sentence as a parameter and returns all the uppercase letters that occurs",function(){
    var result = uppercase_letters("There are Capital Letters in this Sentence Somewhere");
    assert.deepEqual(result,['T','C','L','S','S']);
  });
});
