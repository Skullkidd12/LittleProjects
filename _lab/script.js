const slideshowImages = document.querySelectorAll(".slideshow-img");
const button = document.querySelector("button");
let currentImageCounter = 0;

button.addEventListener("click", nextImage);
slideshowImages[currentImageCounter].style.opacity = 1;

function nextImage() {
  slideshowImages[currentImageCounter].style.opacity = 0;
  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.opacity = 1;
}
