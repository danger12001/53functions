var assert = require('assert');
var reverse = require('../reverse');
//TODO: import the module after you created it.

describe("reverse", function(){

    it("should take a string and return it as reversed", function(){
        //TODO: call your function and use assert to check the result
        var result = reverse("meow");
        assert.equal(result, "woem");
    });

});
