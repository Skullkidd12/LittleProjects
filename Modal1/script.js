let openBtn = document.querySelector("#open-btn");
let modalContainer = document.querySelector("#modal-container");
let closeBtn = document.querySelector("#close-btn");
let img = document.querySelector(".img");

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
  img.style.filter = "Grayscale(50%) ";
});

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
  img.style.filter = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
    img.style.filter = "none";
  }
});
