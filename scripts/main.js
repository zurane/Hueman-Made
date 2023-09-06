// Get dropdown content
const dropdownButton = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownContainer = document.querySelector('.dropdown-container');





dropdownButton.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click from propagating to the document
  toggleDropdown();
});




// Add a click event listener to the button
function toggleDropdown() {
  // Toggle the display style of the dropdown content
  if (dropdownContent.style.display === "inline-flex") {
    dropdownContent.style.display = "none";
    dropdownContainer.style.display = 'none'
    document.removeEventListener("click", removeEvent);
  } else {
    dropdownContent.style.display = "inline-flex";
    dropdownContainer.style.display = 'block'
    dropdownButton.addEventListener('click', removeEvent)
  }
}

function removeEvent(e) {
  if (!dropdownButton.contains(e.target) && !dropdownContent.contains(e.target)) {
    dropdownContent.style.display = 'none';
    document.removeEventListener("click", re);
  }

}