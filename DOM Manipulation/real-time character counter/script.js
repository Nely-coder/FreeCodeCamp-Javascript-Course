const textarea = document.querySelector("textarea");
const charCount = document.querySelector("#char-count");

textarea.addEventListener("input", (e) => {
  let car = e.target.value;

  if (car.length >= 50) {
    e.target.value = car.slice(0, 50);
    charCount.style.color = "red";
  } else {
    charCount.style.color = "black";
  }

  let carCount = e.target.value.length;

  charCount.textContent = `Character Count: ${carCount}/50`;
});
