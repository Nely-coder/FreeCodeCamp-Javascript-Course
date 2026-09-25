let lunches = [];

function addLunchToEnd (arr, str) {
  arr.push(str);
  console.log(str + " added to the end of the lunch menu.");
  return arr;
}

function addLunchToStart (arr, str) {
  arr.unshift(str);
  console.log(str + " added to the start of the lunch menu.");
  return arr;
}

function removeLastLunch (arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  }
  let removedLunch = arr.pop();
  console.log(removedLunch + " removed from the end of the lunch menu.");
  return arr;
}

function removeFirstLunch (arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  }

  let removedLunch = arr.shift();
  console.log(removedLunch + " removed from the start of the lunch menu.");
  
  return arr;
}

function getRandomLunch (arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  }

  let randomLunch = Math.floor(Math.random() * arr.length);
  console.log("Randomly selected lunch: " + arr[randomLunch]);

}

function showLunchMenu (arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else if (arr.length > 0) {
    console.log("Menu items: " + arr.join(", "));
  } 
}