function titleCase (str) {
  let separate = str.split(" ");
  let capitalized = [];

  for (let i = 0; i < separate.length; i++) {
    capitalized.push(separate[i].charAt(0).toUpperCase() + separate[i].slice(1).toLowerCase());
  }
  return capitalized.join(" ");
}