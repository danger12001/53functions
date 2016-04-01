module.exports = function(str){
var words = str.split(" ");
console.log(words);
var last_letters = [];
for(x=0;x<words.length;x++){
  last_letters.push(words[x].charAt(words[x].length - 1));
}
console.log(last_letters);
};
