var word_length = require('../word_length');
var assert = require('assert');

describe("word_length", function(){

    it("Should take a sentence as a parameter and returns the average word length rounded up and rounded down", function(){
        var result = word_length("This is a epic sentence");
        assert.equal(result,"Rounded up: 4, Rounded down: 3");
    });

});
