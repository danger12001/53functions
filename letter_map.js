module.exports = function(str) {
  var string = str.split(" ");
  var wordmap = {};

  string.forEach(function(first_letter) {
    for (x = 0; x < string.length; x++) {
      wordmap[string[x].charAt(0)] = string[x];
    }
  });
  console.log(wordmap);
  return wordmap;
};
