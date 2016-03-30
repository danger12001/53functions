exports.start = function(str){
var string = str.split(" ");
var first_letter = [];
for(x=0;x<string.length;x++){
  first_letter.push(string[x].charAt(0));
}
  if(first_letter.length == 0)
    return null;
      var modeMap = {};
      var maxEl = first_letter[0], maxCount = 1;
        for(var i = 0; i < first_letter.length; i++){
    	      var el = first_letter[i];
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
