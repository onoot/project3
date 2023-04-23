const headerTop1 = document.querySelector(".main-topheader");
const subHeaderTop11 = document.querySelector(".main-subheader-header");
const headerScroll1 = document.querySelector(".main-headerscroll");

setInterval(() => {
  if (window.pageYOffset >= 2) {
    headerTop1.style.display = "block";
    subHeaderTop11.style.opacity = 0;
    headerScroll1.style.display = "block";
  } else {
    if (window.screen.width > 1194) {
      headerScroll1.style.display = "none";
    } else {
      headerScroll1.style.display = "block";
    }
    subHeaderTop11.style.opacity = 1;
    headerTop1.style.display = "block";
  }
}, 50);
