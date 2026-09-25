function largestOfAll (arrs) {
  
  let group = [];

  for (let i = 0; i < arrs.length; i++) {

    let maxNumber = arrs[i][0];

    for (let j = 0; j < arrs[i].length; j++) {

      if (arrs[i][j] > maxNumber) {
        maxNumber = arrs[i][j];
        
      }
    }
    group.push(maxNumber);
  }
  
  return group;
}