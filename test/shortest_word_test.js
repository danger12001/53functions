var shortest_word = require('../shortest_word');
var assert = require('assert');


describe("shortest_word", function(){

    it("takes a sentence as a parameter and returns the shortest word in it, and the length of the word", function(){
        var result = shortest_word("This is a epic sentence");
        assert.deepEqual(result,"a, 1");
    });

});
