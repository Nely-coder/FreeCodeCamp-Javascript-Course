function chunkArrayInGroups (arr, size) {
  if (size < 1) {
    console.log("The number should be >= 1");
  }

  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}