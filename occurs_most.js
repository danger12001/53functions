module.exports = function(str){
  var letters = str.replace(/ /g,"").split("");
  // console.log(letters);
  if(letters.length === 0)
    return null;
    var modeMap = {};
    var maxEl = letters[0], maxCount = 1;
    for(var x = 0; x < letters.length; x++){
        var el = letters[x];
          if(modeMap[el] == null)
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
