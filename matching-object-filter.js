function whatIsInAName(arr, obj) {
  return Object.keys(obj).every(
    (key) => arr.hasOwnProperty(key) && arr[key] === obj[key],
  );
}
