function fearNotLetter (str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let start = alphabet.indexOf(str[0]);


    for (let i = 0; i < str.length; i++) {

      if (str[i] !== alphabet[start + i]) {
        return alphabet[start + i];
      }
    }

  return undefined;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));