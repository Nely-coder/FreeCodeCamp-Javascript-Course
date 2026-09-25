function frankenSplice (arr1, arr2, index) {
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();

   copy2.splice(index, 0, ...copy1);

   return copy2;
}