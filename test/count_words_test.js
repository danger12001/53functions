var assert = require('assert');
var count_words = require('../count_words');

describe("count_words", function(){
  it("should take a sentence as a parameter and returns the number of words in the sentence", function(){
    var result = count_words("this is a sentance");
    assert.equal(result,4);
  });
});
