var assert = require('assert');
var occurs_least = require('../occurs_least');

describe("occurs_least",function(){
  it("should take a sentence as a parameter and returns the letter that occurs the least",function(){
    var result = occurs_least("I like big cups of coffee for energy");
    assert.deepEqual(result,{ I: 1,
  l: 1,
  i: 2,
  k: 1,
  e: 5,
  b: 1,
  g: 2,
  c: 2,
  u: 1,
  p: 1,
  s: 1,
  o: 3,
  f: 4,
  r: 2,
  n: 1,
  y: 1 }
);
  });
});
