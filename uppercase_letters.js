module.exports = function(string){
var letters = string.replace(/ /g, "").split("");
var CapitalLetters = [];
for(var x= 0; x < letters.length; x++){
  if(letters[x].toUpperCase() == letters[x]){
CapitalLetters.push(letters[x]);
  }
}
return CapitalLetters;
};
