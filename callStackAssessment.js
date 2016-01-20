function isPasswordStrong(password) {
  var passwordLength = checkLength(password)
  if (passwordLength < 12) {
    return false;
  }
  if (isSimpleWord(password)) {
    //third check here
    return false;
  }
  if (hasOneSpecialChar(password)) {
    return true;
  }
  return true;
}

function checkLength(string) {
  //first check here
  return string.length;
}

function isSimpleWord (string) {
  var wordList = ["apple", "ball", "cat"]
  if (wordList.indexOf(string) === -1) {
    return false;
  }
  return true;
}

function hasOneSpecialChar(string) {
  //second check here
  var newArr = string.split('')
  if (['!', '@', '#', '$'].indexOf(newArr) === -1) {
    return false;
  }
  return true;
}

isPasswordStrong("cashewList@3921")
