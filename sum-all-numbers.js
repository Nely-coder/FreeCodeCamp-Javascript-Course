function sumAll (arr) {
  const first = parseInt(arr[0]);
  const last = parseInt(arr[1]);

  let count = first - last;

  if (count < 0) {
    count *= -1;
    count += 1;

     return (count * (first + last)) / 2;
  } else {
    count += 1;
    
    return (count * (first + last)) / 2;
  }
}