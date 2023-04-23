const headerMobile = document.querySelector(".main-header-mob");
const btnBurgerButton = document.querySelector(".main-topheader-right__burger");
const btnCloseHeaderMobile = document.querySelector(".main-header-mob__close");

btnBurgerButton.addEventListener("click", (e) => {
  e.preventDefault();
  headerMobile.style.display = "block";
});

btnCloseHeaderMobile.addEventListener("click", (e) => {
  e.preventDefault();
  headerMobile.style.display = "none";
});
