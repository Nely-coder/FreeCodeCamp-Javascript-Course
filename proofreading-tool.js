function isPalindrome (word) {
  let reverseWord = word.split("").reverse().join("");
  if (word.toLowerCase() === reverseWord.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

function findPalindromeBreaks(words) {
  const notPalindrome = [];
  
  for (let i = 0; i < words.length; i++) {
    const result = isPalindrome(words[i]);

    if (result === false) {
      notPalindrome.push(i);
    }
  }
  return notPalindrome;
}

function findRepeatedPhrases(words, phraseLength) {
  // Return an empty array if phraseLength is too large
  if (phraseLength >= words.length) {
    return [];
  }

  const seen = {};
  const repeated = [];
  const added = {};

  for (let i = 0; i <= words.length - phraseLength; i++) {
    // Build the phrase
    const phrase = words.slice(i, i + phraseLength).join(" ");

    if (!(phrase in seen)) {
      // First time we've seen this phrase
      seen[phrase] = i;
    } else {
      // Add the first occurrence only once
      if (!(phrase in added)) {
        repeated.push(seen[phrase]);
        added[phrase] = true;
      }

      // Add the current occurrence
      repeated.push(i);
    }
  }

  return repeated;
}

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) {
    return [];
  }

  const results = [];

  for (let i = 0; i < texts.length; i++) {
    results.push({
      repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength),
      palindromeBreaks: findPalindromeBreaks(texts[i])
    });
  }

  return results;
}