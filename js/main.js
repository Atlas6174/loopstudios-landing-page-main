const menuBtn = document.querySelector(".menu-btn");
const menuBtnBrg = document.querySelector(".menu-btn_brg");
const navbar = document.querySelector(".navbar");

let open = false;

menuBtn.addEventListener('click', toggle);

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
