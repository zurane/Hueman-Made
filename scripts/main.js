// This is a simple toggole function for the dropdown menu
// Get dropdown content

const dropdownContent = document.querySelector(".dropdown-content");
const icons = document.querySelectorAll(".menu-icon");
let anchorTags = `<a href='https://www.google.com'>Nothing</a>`;

document.querySelectorAll(".dropdown-btn").forEach((item) => {
  item.addEventListener("click", HandleClick);
});

// Every evenListener takes a callBack function as it's second parameter and rather the nature of how it should react should be all encased within your callback function.
function HandleClick() {
  if (dropdownContent.style.display === "inline-flex") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.innerHTML = anchorTags;
    dropdownContent.style.display = "inline-flex";
  }
}

// Remember that if you want to affect an elements with similar properties or property, you iterate using the forEach loop.
// Ater it iterates through all the element i will apply an event listener on each element and in this case toggling between two different icons.
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.textContent === "expand_more") {
      return (icon.textContent = "expand_less");
    } else {
      return (icon.textContent = "expand_more");
    }
  });
});
