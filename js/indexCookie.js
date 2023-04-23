const cookieBackground = document.querySelector(".main-cookie-bg");
const cookieMenu = document.querySelector(".main-cookie");
const btnCloseCookie = document.querySelector(".main-cookie__close");
const btnAcceptCookie = document.querySelector(".main-cookie__btns_btno > button");

btnCloseCookie.addEventListener("click", (e) => {
  e.preventDefault();
  cookieBackground.style.display = "none";
  cookieMenu.style.display = "none";
});

btnAcceptCookie.addEventListener("click", (e) => {
  e.preventDefault();
  cookieBackground.style.display = "none";
  cookieMenu.style.display = "none";
});

// TODO: Потом удалить
cookieBackground.style.display = "none";
cookieMenu.style.display = "none";
