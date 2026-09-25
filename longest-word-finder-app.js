function findLongestWordLength (str) {
  let splitStr = str.split(/\s+/);
  let counter = splitStr[0].length;

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > counter) {
      counter = splitStr[i].length;
      
    }
  }
  return counter;
}