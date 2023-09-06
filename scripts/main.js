// Get the button and dropdown content
const dropdownButton = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");

// Add a click event listener to the button
dropdownButton.addEventListener("click", function () {
  // Toggle the display style of the dropdown content
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});
