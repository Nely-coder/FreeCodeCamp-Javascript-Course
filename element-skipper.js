function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr;
    } else {
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}