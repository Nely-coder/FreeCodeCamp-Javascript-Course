function confirmEnding (text, textcheck) {
  if (text.slice(-textcheck.length) === textcheck) {
    return true;
  } else {
    return false;
  }
}