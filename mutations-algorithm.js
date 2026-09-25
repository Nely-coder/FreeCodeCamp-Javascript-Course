function mutation (arr) {
  let firstStr = arr[0].toLowerCase();
  let secondStr = arr[1].toLowerCase();
  
  for (const char of secondStr) {
    if (!firstStr.includes(char)) {
      return false;
    }
  }
  return true
}


console.log(mutation(["hello", "hey"]));