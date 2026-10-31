const galleryImg = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector(".lightbox");
const lightBoxImg = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

galleryImg.forEach((img) => {
  let imgSrc = img.getAttribute("src");

  img.addEventListener("click", () => {
    lightBox.style.display = "flex";

    let newSrc = imgSrc.replace("-thumbnail.jpg", ".jpg");

    lightBoxImg.setAttribute("src", newSrc);
  });
});

lightBox.addEventListener("click", () => (lightBox.style.display = "none"));

closeBtn.addEventListener("click", () => (lightBox.style.display = "none"));
