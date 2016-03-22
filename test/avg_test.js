var avg = require('../avg');
var assert = require('assert');

describe("avg", function(){

    it("Should take a sentence as a parameter and returns the average word length rounded up", function(){
        var result = avg("This is a epic sentence");
        assert.equal(result,"4");
    });

});
