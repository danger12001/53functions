var assert = require('assert');
var helloList = require('../hello-list');

describe("hello-list", function(){
  it("Should take a number and print 'hello world' for each number", function(){
    var result = helloList(3);
    assert.equal(result, "hello world hello world hello world ");
  });
});
