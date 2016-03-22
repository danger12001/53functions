module.exports = function(str){
var Split = str.split(" ");
var totalAmount = 0;
var wordnumbers = [];
// returns all words as items in an array
for (x = 0; x < Split.length; x++){
wordnumbers.push(Split[x].length);
totalAmount += wordnumbers[x];
}
var average = totalAmount / Split.length;
var aveUp = Math.round(average);
var aveDown = Math.floor(average);
return "Rounded up: " + aveUp + ", " + "Rounded down: " + aveDown;
};
