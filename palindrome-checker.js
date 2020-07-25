function palindrome(str) {
  var inLowerCase = str.toLowerCase();
  var newString = inLowerCase.replace(/[^0-9a-z]/gi, '');
  var l = 0;
  var i = newString.length - 1;
  while (l < i) {
    if(newString[l++] == newString[i--]){
      continue;
    }else {
      return false;
    }
  }
  return true;
}
