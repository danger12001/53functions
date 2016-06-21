module.exports = function(string){
var letters = string.replace(/ /g, "").split("");
var lowerCaseLetters = [];
for(var x= 0; x < letters.length; x++){
  if(letters[x].toLowerCase() == letters[x]){
lowerCaseLetters.push(letters[x]);
  }
}
return lowerCaseLetters;
};
