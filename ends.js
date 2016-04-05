module.exports = function(str){
var words = str.split(" ");
// console.log(words);
var last_letters = [];
for(x=0;x<words.length;x++){
  last_letters.push(words[x].charAt(words[x].length - 1));
}
if(last_letters.length === 0)
  return null;
  var modeMap = {};
  var maxEl = last_letters[0], maxCount = 1;
  for(var x = 0; x < last_letters.length; x++){
      var el = last_letters[x];
        if(modeMap[el] === null)
          modeMap[el] = 1;
        else
          modeMap[el]++;
            if(modeMap[el] > maxCount){
                maxEl = el;
                maxCount = modeMap[el];
                                      }
                                              }
return maxEl;
};
