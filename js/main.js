const menuBtn = document.querySelector(".menu-btn");
const menuBtnBrg = document.querySelector(".menu-btn_brg");
const navbar = document.querySelector(".navbar");
const headerWrapper = document.querySelector(".header-wrapper");

let open = false;

/* Events */

// Mechanics for the navb=bar and the button
menuBtn.addEventListener('click', toggle);

// Change the background from the header case scolling
document.addEventListener('scroll', changeBg);
// Ensure that the header has the correct background
changeBg();



/* Functions */
function toggle() {
  if (!open) {
    menuBtnBrg.classList.add("open");
    navbar.classList.add("open");

    open = true;
    changeBg();

  } else {
    menuBtnBrg.classList.remove("open");
    navbar.classList.remove("open");

    open = false;
    changeBg();
  }
}

function changeBg() {
  console.log('scrolling');
  if (pageYOffset > 30 && !open) {
    headerWrapper.classList.add("scrolled");
  } else {
    headerWrapper.classList.remove("scrolled");
  }
}

/* INTERSECTION OBSERVER */
// Refrencing indivually the children from the first section
const frstSection = document.querySelector(".first-section")
			  .children[0]
			  .children;
// Referencing every grid-item
const gridItems = document.querySelectorAll(".grid-item");


// Options for the observer
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -20% 0px"
}

// Declaring observer. It add the class "observed" to the observed items
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    console.log(entry)

    if (entry.isIntersecting) {
      entry.target.classList.add('observed');
    }
  })
}, options);

// Observing the image and text from first-section
for (let i = 0; i < frstSection.length; i++) {
  console.log(frstSection[i]);
  observer.observe(frstSection[i]);
}

// Observing the images from the items grids
gridItems.forEach(gridItem => {
  observer.observe(gridItem);
});
