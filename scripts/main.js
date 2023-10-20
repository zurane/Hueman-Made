// This is a simple toggole function for the dropdown menu
// Get dropdown content
const carousel = document.querySelector('.carousel');
const carouselArrows = document.querySelectorAll('.carousel-arrow');
const firstImg = carousel.querySelectorAll('.img')[0];
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






// Carousel section script 

let isDragStart = false, prevPageX, prevScrollleft;

let firstImgWidth = firstImg.clientWidth + 14; // getting the first image and adding the first 14px margin value

carouselArrows.forEach(icon => {
  icon.addEventListener('click', () => {
    // this ternary function reduces the width of the first image when the left icon is clicked or otherwise adds it.
        carousel.scrollLeft += icon.id === 'left' ? -firstImgWidth : firstImgWidth
    })
})

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollleft = carousel.pageX;
}

const dragging = (e) => {

  // Remember an exclamation mark is known as the "logical NOT" operator. It negates the truthiness of a value. 
  // In other words, it flips a true value to false and a false value to true. For example:
  if (!isDragStart) return;
  e.preventDefault()
  let positionDiff = e.pageX - prevPageX
  carousel.scrollLeft = prevScrollleft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
}

carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mousemove', dragging)
carousel.addEventListener('mouseover', dragStop)