function uniteUnique (...args) {
  const newArr = [];

  for (const arr of args) {
    for (const item of arr) {
      if (!newArr.includes(item)) {
        newArr.push(item);
      }
    }
  }

  return newArr;

}