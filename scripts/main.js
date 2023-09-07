// Get dropdown content
const dropdownButton = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");
const icon = document.querySelector(".material-symbols-outlined");


dropdownButton.addEventListener("click", function () {


  if (dropdownContent.style.display === "inline-flex") {
    icon.innerHTML = `<span class="material-symbols-outlined">expand_more</span>`
    dropdownContent.style.display = "none";
  } else {

    icon.innerHTML = `<span class="material-symbols-outlined">expand_less</span>`
    dropdownContent.style.display = "inline-flex";
  }

})