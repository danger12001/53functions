module.exports = function(str){
var splitStr = str.split(" ");//splits the string by spaces
var word = splitStr[0];//defines word as splitStr with a index of 0
for (x = 0; x < splitStr.length;x++){//increments x if it is smaller than split string.length
  if (splitStr[x] !== null){//if the split string is not equal to null
    if(word.length > splitStr[x].length){// nested if checking if word.length is bigger than the split strings length
      word = splitStr[x];//asigns word to split string
    }
  }
}
return  word + ", " + word.length; // returns values
};
