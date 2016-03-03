var assert = require('assert');
var sum_words_len = require('../sum_word_len');

describe("Sum Words Length", function(){
  it("should take a sentence as a parameter and returns the sum of the length of words in it", function(){
    var result = sum_words_len("this is a sentance");
    assert.equal(result,15);
  });
});
