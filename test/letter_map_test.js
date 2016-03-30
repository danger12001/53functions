var letter_map = require('../letter_map');
var assert = require('assert');

describe("letter_map", function(){

    it("Write a function that takes a sentence as a parameter.The function should return a map. The keys of the map should be the first letters from the words in the sentence. The values should be an array of any words in the sentence that start with the key of the map.", function(){
        var result = letter_map("This is a epic sentence");
        assert.deepEqual(result,{ T: 'This', i: 'is', a: 'a', e: 'epic', s: 'sentence' });
    });

});
