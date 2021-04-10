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
  } else {
    menuBtnBrg.classList.remove("open");
    navbar.classList.remove("open");

    open = false;
  }
}

function changeBg() {
  if (pageYOffset > 30) {
    headerWrapper.classList.add("scrolled");
  } else {
    headerWrapper.classList.remove("scrolled");
  }
}
