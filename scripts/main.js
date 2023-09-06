// Get dropdown content
const dropdownButton = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");


dropdownButton.addEventListener("click", function () {


  if (dropdownContent.style.display === "inline-flex") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "inline-flex";
  }

})