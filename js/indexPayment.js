const btnPayCryptoCopy = document.querySelectorAll(".main-paycrypto-input__content_btn");
const inputPayCryptoCopy = document.querySelectorAll(
  ".main-paycrypto-input__content_input > input",
);

btnPayCryptoCopy[0].addEventListener("click", (e) => {
  e.preventDefault();
  inputPayCryptoCopy[0].select();
  inputPayCryptoCopy[0].setSelectionRange(0, 99999);
  navigator.clipboard.writeText(inputPayCryptoCopy[0].value);
  console.log("1");
});

btnPayCryptoCopy[1].addEventListener("click", (e) => {
  e.preventDefault();
  inputPayCryptoCopy[1].select();
  inputPayCryptoCopy[1].setSelectionRange(0, 99999);
  navigator.clipboard.writeText(inputPayCryptoCopy[1].value);
  console.log("2");
});
