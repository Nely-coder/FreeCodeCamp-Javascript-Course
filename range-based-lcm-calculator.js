function smallestCommons(arr) {
  arr.sort((a, b) => a - b);

  let range = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }

  let scm = range[0];

  for (let i = 1; i < range.length; i++) {
    let num = range[i];
    let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    scm = (scm * num) / gcd(scm, num);
  }

  return scm;
}
