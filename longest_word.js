module.exports = function(str){
var splitStr = str.split(" "); //splits the string by spaces.
var leng = 0; //declaring variables
var word = null; //"" doesn't work, null indicates that its an object but not the same as undefined
for (x = 0; x < splitStr.length;x++){//checks for if x is smaller than the length of the split string. if it is smaller it will increment x
  if (leng < splitStr[x].length){// if leng is smaller than the split string of x.length
    leng = splitStr[x].length;// then length must be asigned the length of the split string with x
    word = splitStr[x];//and the word must be the split string of x.
  }
}
return [word, leng]; // will return the answer.
};
