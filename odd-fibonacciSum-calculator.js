function sumFibs (num) {
  let arr = [];
  
  if (num === 1) {
    return 2;
  } else if (num === 2) {
    return 2;;
  } else {

    arr = [0, 1];

    while (arr[arr.length-1] <= num) {
    let result = arr[arr.length-1] + arr[arr.length-2];

      arr.push(result);
  }

  }
  let sum = 0;
  for (const item of arr) {
    if (item <= num && item % 2 !== 0 ) {
      sum += item;
    }
    
  }
  return sum;
  
}

// function sumFibs(num) {
//   let arr = [0, 1];

//   while (arr[arr.length - 1] <= num) {
//     let result = arr[arr.length - 1] + arr[arr.length - 2];
//     arr.push(result);
//   }

//   let sum = 0;

//   for (const item of arr) {
//     if (item <= num && item % 2 !== 0) {
//       sum += item;
//     }
//   }

//   return sum;
// }