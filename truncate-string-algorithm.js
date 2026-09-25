function truncateString (text, size) {
  if (text.length > size) {
    return text.slice(0, size) + "...";
  } else if (text.length <= size) {
    return text;
  }
}