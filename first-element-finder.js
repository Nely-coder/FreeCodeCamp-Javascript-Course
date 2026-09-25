function findElement (arr, func) {
  for (const item of arr) {
    if (func(item) === true) {
      return item;
    }
  }
  return undefined;
}