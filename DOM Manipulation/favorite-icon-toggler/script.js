const heartBtns = document.querySelectorAll(".favorite-icon");

heartBtns.forEach((btn) =>
  btn.addEventListener("click", () => handleClick(btn)),
);

function handleClick(btn) {
  const filled = btn.classList.toggle("filled");
  btn.innerHTML = filled ? "&#10084" : "&#9825";
}
