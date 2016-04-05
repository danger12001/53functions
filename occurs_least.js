module.exports = function(str){
  var letters = str.replace(/ /g,"").split("");
  var a = letters.reduce(function (acc, curr) {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
console.log(acc);

    return acc;
  }, {});
};
