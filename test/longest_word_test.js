var longest_word = require('../longest_word');
var assert = require('assert');


describe("longest_word", function(){

    it("takes a sentence as a parameter and returns the longest word in it, and the length of the word", function(){
        var result = longest_word("This is a epic sentence");
        assert.deepEqual(result,["sentence",8]);
    });

});
