function xo(str) {
  var str1 = str.length;
  var tampX=0;
  var tampO=0;
  for(var i = 0 ; i < str1 ; i++)
  {
  	if (str[i] === "x") 
  	{
  		tampX=tampX+1;
  	}
  	else tampO=tampO+1;
  }
  if (tampO === tampX) {
  	return true
  }else return false;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true