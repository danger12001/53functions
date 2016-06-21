module.exports = function(a,symbol, b){
var result = "";
if(symbol === "+"){
  result = a + b;
}
else if(symbol === "-"){
  result = a - b;
}
else if(symbol === "*"){
  result = a * b;
}
else if(symbol === "/"){
  result = a / b;
}
return result;
};
