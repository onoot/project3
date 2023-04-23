const btnSelectPaymentUnsel = document.querySelector(
    ".main-vcards__aftpayment_checkcard_select_btn",
);
const selectPaymentArrow = document.querySelector(
    ".main-vcards__aftpayment_checkcard_select_btn > span",
);
const selectMenuPayment = document.querySelector(".main-vcards__aftpayment_checkcard_select_menu");
const selectCryptosMenuPaymentSel = document.querySelectorAll(
    ".main-vcards__aftpayment_checkcard_select_menu_kr",
);

const pricesCryptoValue = document.querySelectorAll(
    ".main-vcards__aftpayment_checkcard_select_menu_price",
);
const priceCardCurrency = document.querySelectorAll(".main-vcards__currency_block_r_text_a");
const linkScrollHeader = document.querySelectorAll(".main-headerscroll__link");

// BtnSelected
const menuCheckCard = document.querySelector(".main-vcards__aftpayment_checkcard");
const totalCountCheckCard = document.querySelector(
    ".main-vcards__aftpayment_checkcard_total_count",
);
const btnSelectPaymentSel = document.querySelector(
    ".main-vcards__aftpayment_checkcard_select_btnsel",
);
const imgSelectPaymentSel = document.querySelector(
    ".main-vcards__aftpayment_checkcard_select_btnsel_img > img",
);
const nameSelectPaymentSel = document.querySelector(
    ".main-vcards__aftpayment_checkcard_select_btnsel_name",
);
const priceSelectPaymentSel = document.querySelector(
    ".main-vcards__aftpayment_checkcard_select_btnsel_price",
);

const btnBuyNowCard = document.querySelector(".main-vcards__aftpayment_checkcard_btn > button");

// Busket
const activeBasketCardMoreZero = document.querySelectorAll(".main-vcards__currency_block_r");
const countBasketCard = document.querySelectorAll(".main-vcards__currency_block_r_count_c");
const countBasket = document.querySelectorAll(".main-topheader-right__basket_label");
const priceBasket = document.querySelectorAll(".main-topheader-right__basket_price");
const priceBasketMobile = document.querySelector(".main-headerscroll-mob__content_price");

const contentCheckCard = document.querySelector(".main-vcards__aftpayment_checkcard_content_c");

// ConfirmPay
const mainHomeMenu = document.querySelector(".main-home");
const mainConfirmMenuOne = document.querySelector(".main-confirm");
const menuConfirmPay = document.querySelector(".main-confirm-pay");
const totalPriceMenuConfirmPay = document.querySelectorAll(".main-confirm-pay__info_block_text");
console.log(totalPriceMenuConfirmPay)
const imgConfirmPay = document.querySelector(".main-confirm-pay__info_block_img_img");
const textConfirmPay = document.querySelector(".main-confirm-pay__info_block_img_text");

// PayCrypto
const mainPayCrypto = document.querySelector(".main-paycrypto");

let currencies = {};
let selectCrypto = "";
let isSelectNeedCrypto = false;

// Payment
const cancelPayment = document.querySelector(".main-confirm-btns__btno > button");
const nextPayment = document.querySelector(".main-confirm-btns__btnt > button");
const inputPayment = document.querySelector(".main-confirm-input > input");

// PayCrypto
const inputPayCrypto = document.querySelectorAll(".main-paycrypto-input__content_input > input");
const titlePayCrypto = document.querySelectorAll(".main-paycrypto-input__title");
const btnCancelPayCrypto = document.querySelector(".main-paycrypto__btns_btno > button");
const btnNextPayCrypto = document.querySelector(".main-paycrypto__btns_btnt > button");

// PayFinish
const menuPayFinish = document.querySelector(".main-payfinish");

function requestCryptoCurrency() {
    fetch(
            // "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,USDT,USDC,BCH,LTC,DOGE,ETH,XMR&tsyms=USD,BTC,USDT,USDC,BCH,LTC,DOGE,ETH,XMR",
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,USDT,USDC,BCH,LTC,DOGE&tsyms=USD,BTC,USDT,USDC,BCH,LTC,DOGE",

    )
        .then((response) => response.json())
        .then((data) => {
            console.log("data -->", data);
            data['USDT.ERC20'] = {USD: 1, BTC:'test', USDT:"test"}
            data['USDT.TRC20'] = {USD: 1, BTC:'test', USDT:"test"}
            data.Perfect_Money = {USD: 1, BTC:'test', USDT:"test"}
            console.log("data2 -->", data);
            currencies = data;
        });
}
requestCryptoCurrency();

function chooseCryptoValue(needCrypto, curr) {
    pricesCryptoValue[needCrypto] = currencies[curr]["USD"];
}

function selectNeedCrypto(needCrypto, name, curr) {
    console.log("name -->", name);
    isSelectNeedCrypto = true;
    var QR = document.getElementById('QR');
    if (curr === "BTC") {
        imgSelectPaymentSel.src = "img/bitcoin.svg";
        selectCrypto = "BTC";
        critpoV = 'BTC.jpg'
        QR.src = "img/" + critpoV;
        textConfirmPay.innerHTML = "BTC";
        imgConfirmPay.src = "img/bitcoin.svg";
        titlePayCrypto[0].innerHTML = `BTC address:`;
        titlePayCrypto[1].innerHTML = `BTC amount:`;
        inputPayCrypto[0].value = "bc1qf6gfc3zp5vrgw4sxmm8luwztsrvjru3x3aj5wx";
    }
    if (curr === "LTC") {
        critpoV = 'LTC.jpg'
        QR.src = "img/" + critpoV;
        imgSelectPaymentSel.src = "img/litecoin.svg";
        selectCrypto = "LTC";
        critpoV = 'LTC.jpg'
        textConfirmPay.innerHTML = "LTC";
        imgConfirmPay.src = "img/litecoin.svg";
        titlePayCrypto[0].innerHTML = `LTC address:`;
        titlePayCrypto[1].innerHTML = `LTC amount:`;
        inputPayCrypto[0].value = "ltc1qj7vl0cr2hrwcva6tmp70m0carsknldqq32sfdq";
    }
    if (curr === "DOGE") {
        critpoV = 'DOGE.jpg'
        QR.src = "img/" + critpoV;
        imgSelectPaymentSel.src = "img/dogecoin.svg";
        selectCrypto = "DOGE";
        textConfirmPay.innerHTML = "DOGE";
        imgConfirmPay.src = "img/dogecoin.svg";
        titlePayCrypto[0].innerHTML = `DOGE address:`;
        titlePayCrypto[1].innerHTML = `DOGE amount:`;
        inputPayCrypto[0].value = "DSwepLLmLBtqi3pdzzUnRf7jfbrwj49zeg";
    }
    if (curr === "BCH") {
        critpoV = 'BCH.jpg'
        QR.src = "img/" + critpoV;
        imgSelectPaymentSel.src = "img/bitcoin-cash.svg";
        selectCrypto = "BCH";
        textConfirmPay.innerHTML = "BCH";
        imgConfirmPay.src = "img/bitcoin-cash.svg";
        titlePayCrypto[0].innerHTML = `BCH address:`;
        titlePayCrypto[1].innerHTML = `BCH amount:`;
        inputPayCrypto[0].value = "qrec0dgcfw8gjqrpp28qmg0klsvfvr6us5x8p96exj";
    }
    // if (curr === "ETH") {
    //     imgSelectPaymentSel.src = "img/eth-coinbase.png";
    //     selectCrypto = "ETH";
    //     textConfirmPay.innerHTML = "ETH";
    //     imgConfirmPay.src = "img/eth-coinbase.png";
    //     titlePayCrypto[0].innerHTML = `ETH address:`;
    //     titlePayCrypto[1].innerHTML = `ETH amount:`;
    //     inputPayCrypto[0].value = "0x0AE609e30b6E4548E5b2dE56F7D013ae14396B82";
    // }
    // if (curr === "XMR") {
    //     imgSelectPaymentSel.src = "img/xmr.png";
    //     selectCrypto = "XMR";
    //     textConfirmPay.innerHTML = "XMR";
    //     imgConfirmPay.src = "img/xmr.png";
    //     titlePayCrypto[0].innerHTML = `XMR address:`;
    //     titlePayCrypto[1].innerHTML = `XMR amount:`;
    //     inputPayCrypto[0].value =
    //         "49eyNQ6CihKeTWN1kDocozFg4vMa8qUPfQXQidx7xweSB1neoNJ2jh2U2tAGkpTBt847r5qefR74jhR6ZHZ5mrur56qDtiT";
    // }
    if (curr === "USDT.ERC20") {
        critpoV = 'USDT.ERC20.jpg'
        QR.src = "img/" + critpoV;
        imgSelectPaymentSel.src = "img/usdt_erc20.svg";
        selectCrypto = "USDT.ERC20"; //check
        textConfirmPay.innerHTML = "USDT (ETH)";
        imgConfirmPay.src = "img/usdt_erc20.svg";
        titlePayCrypto[0].innerHTML = `USDT (ETH) address:`;
        titlePayCrypto[1].innerHTML = `USDT (ETH) amount:`;
        inputPayCrypto[0].value = "there are wallet";
    }
    if (curr === "USDT.TRC20") {
        critpoV = 'USDT-TRC20.jpg'
        QR.src = "img/" + critpoV;
        imgSelectPaymentSel.src = "img/usdt_trc20.svg";
        selectCrypto = "USDT.TRC20";
        textConfirmPay.innerHTML = "USDT (Tron)";
        imgConfirmPay.src = "img/usdt_trc20.svg";
        titlePayCrypto[0].innerHTML = `USDT (Tron) address:`;
        titlePayCrypto[1].innerHTML = `USDT (Tron) amount:`;
        inputPayCrypto[0].value = "there are wallet";
    }
    if (curr === "Perfect_Money") {
        critpoV = 'Perfect_Money.jpg'
        QR.src = "img/" + critpoV;
        imgSelectPaymentSel.src = "img/perfect-money.svg";
        selectCrypto = "Perfect_Money";
        textConfirmPay.innerHTML = "Perfect Money";
        imgConfirmPay.src = "img/perfect-money.svg";
        titlePayCrypto[0].innerHTML = `Perfect Money address:`;
        titlePayCrypto[1].innerHTML = `Perfect Money amount:`;
        inputPayCrypto[0].value = "there are wallet";
    }
    for (let i = 0; i < selectCryptosMenuPaymentSel.length; i++) {
        if (
            selectCryptosMenuPaymentSel[i].classList.contains(
                "main-vcards__aftpayment_checkcard_select_menu_kra",
            )
        ) {
            selectCryptosMenuPaymentSel[i].classList.remove(
                "main-vcards__aftpayment_checkcard_select_menu_kra",
            );
        }
    }
    selectCryptosMenuPaymentSel[needCrypto].classList.add(
        "main-vcards__aftpayment_checkcard_select_menu_kra",
    );
    if (curr !== "") {
        priceSelectPaymentSel.innerHTML = `$ ${currencies[curr]["USD"]}`;
        document.querySelector('.main-vcards__aftpayment_checkcard_select_btnsel_price').style.display="block";
    }
    if(selectCrypto === "Perfect_Money" || selectCrypto === "USDT.TRC20" || selectCrypto === "USDT.ERC20")
    {
        document.querySelector('.main-vcards__aftpayment_checkcard_select_btnsel_price').style.display="none";
    }
    nameSelectPaymentSel.innerHTML = name;
    btnSelectPaymentUnsel.style.display = "none";
    selectMenuPayment.style.display = "none";
    selectPaymentArrow.style.transform = "none";
    btnSelectPaymentSel.style.display = "flex";
   if(selectCrypto!=="Perfect_Money"){
       document.querySelector('#curr-crypto').innerHTML=selectCrypto+":";
   }
   else {
       document.querySelector('#total-crypto').style.display="none";
   }
    totalPriceMenuConfirmPay[1].innerHTML = `${(
    Number(totalPriceMenuConfirmPay[0].innerHTML.split("$")[1]) / currencies[selectCrypto]["USD"]
  ).toFixed(8)} ${selectCrypto}`;
    inputPayCrypto[1].value = (
        Number(totalPriceMenuConfirmPay[0].innerHTML.split("$")[1]) / currencies[selectCrypto]["USD"]
    ).toFixed(8);
}

function deleteCard(needCrypto, name) {
    let needIdxCard = 0;
    const countCheckCard = document.querySelectorAll(".main-vcards__aftpayment_checkcard_count");
    for (let i = 0; i < countCheckCard.length; i++) {
        if (countCheckCard[i].children[0].innerHTML === name) {
            needIdxCard = i;
            break;
        }
    }
    const countDeleteCard = countCheckCard[needIdxCard].children[1].querySelector(
        ".main-vcards__aftpayment_checkcard_count_count",
    );
    const priceDeleteCard = countCheckCard[needIdxCard].children[1].querySelector(
        ".main-vcards__aftpayment_checkcard_count_total",
    );
    if (
        Number(priceBasket[0].innerHTML.split("$")[1]) -
        Number(priceDeleteCard.innerHTML.split("$")[1]) >
        0
    ) {
        const priceBasketCurrent =
            Number(priceBasket[0].innerHTML.split("$")[1]) -
            Number(priceDeleteCard.innerHTML.split("$")[1]);
        priceBasket[0].innerHTML = `$${priceBasketCurrent.toFixed(2)}`;
        priceBasketMobile.innerHTML = `$${priceBasketCurrent.toFixed(2)}`;
    } else {
        priceBasket[0].innerHTML = `$0`;
        priceBasketMobile.innerHTML = `$0`;
    }
    if (
        Number(priceBasket[1].innerHTML.split("$")[1]) -
        Number(priceDeleteCard.innerHTML.split("$")[1]) >
        0
    ) {
        const priceBasketCurrent =
            Number(priceBasket[1].innerHTML.split("$")[1]) -
            Number(priceDeleteCard.innerHTML.split("$")[1]);
        priceBasket[1].innerHTML = `$${priceBasketCurrent.toFixed(2)}`;
        priceBasketMobile.innerHTML = `$${priceBasketCurrent.toFixed(2)}`;
    } else {
        priceBasket[1].innerHTML = `$0`;
        priceBasketMobile.innerHTML = `$0`;
    }
    if (Number(countBasket[0].innerHTML) - Number(countDeleteCard.innerHTML) > 0) {
        countBasket[0].innerHTML = Number(countBasket[0].innerHTML) - Number(countDeleteCard.innerHTML);
    } else {
        countBasket[0].innerHTML = 0;
        countBasket[0].style.display = "none";
    }
    if (Number(countBasket[1].innerHTML) - Number(countDeleteCard.innerHTML) > 0) {
        countBasket[1].innerHTML = Number(countBasket[1].innerHTML) - Number(countDeleteCard.innerHTML);
    } else {
        countBasket[1].innerHTML = 0;
        countBasket[1].style.display = "none";
    }
    console.log("priceBasket.innerHTML -->", priceBasket.innerHTML);
    console.log("priceDeleteCard.innerHTML -->", priceDeleteCard.innerHTML);
    console.log("totalCountCheckCard.innerHTML -->", totalCountCheckCard.innerHTML);
    totalCountCheckCard.innerHTML = priceBasket[0].innerHTML;
    countCheckCard[needIdxCard].remove();

    countBasketCard[needCrypto].innerHTML = 0;
    activeBasketCardMoreZero[needCrypto * (2 * 2) - needCrypto + 1].classList.remove(
        "main-vcards__currency_block_r_active",
    );
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function addCard(needCrypto, name, price) {
    for (let i = 0; i < linkScrollHeader.length; i++) {
        linkScrollHeader[i].style.marginRight = "11px";
    }

    if (Number(countBasketCard[needCrypto].innerHTML) === 0) {
        menuCheckCard.style.display = "flex";
        const countNeedCheckCard = document.createElement("div");
        const titleNeedCheckCard = document.createElement("div");
        const blockNeedCheckCard = document.createElement("div");
        const priceNeedCheckCard = document.createElement("div");
        const xNeedCheckCard = document.createElement("div");
        const countBlockCheckCard = document.createElement("div");
        const totalBlockCheckCard = document.createElement("div");
        const imgBlockCheckCard = document.createElement("div");
        const imgNeedBlockCheckCard = document.createElement("img");

        titleNeedCheckCard.appendChild(document.createTextNode(name));
        priceNeedCheckCard.appendChild(document.createTextNode(price));
        xNeedCheckCard.appendChild(document.createTextNode("x"));
        countBlockCheckCard.appendChild(document.createTextNode("1"));
        totalBlockCheckCard.appendChild(document.createTextNode(`$${price}`));

        imgNeedBlockCheckCard.src = "img/icon_trash.svg";
        imgNeedBlockCheckCard.alt = "icon_trash";

        imgBlockCheckCard.addEventListener("click", (e) => {
            e.preventDefault();
            deleteCard(needCrypto, name);
        });

        titleNeedCheckCard.className = "main-vcards__aftpayment_checkcard_count_title";
        countNeedCheckCard.className = "main-vcards__aftpayment_checkcard_count";
        blockNeedCheckCard.className = "main-vcards__aftpayment_checkcard_count_block";
        priceNeedCheckCard.className = "main-vcards__aftpayment_checkcard_count_price";
        xNeedCheckCard.className = "main-vcards__aftpayment_checkcard_count_x";
        countBlockCheckCard.className = "main-vcards__aftpayment_checkcard_count_count";
        totalBlockCheckCard.className = "main-vcards__aftpayment_checkcard_count_total";
        imgBlockCheckCard.className = "main-vcards__aftpayment_checkcard_count_img";

        contentCheckCard.insertBefore(countNeedCheckCard, null);
        countNeedCheckCard.insertBefore(titleNeedCheckCard, null);
        countNeedCheckCard.insertBefore(blockNeedCheckCard, null);
        blockNeedCheckCard.insertBefore(priceNeedCheckCard, null);
        blockNeedCheckCard.insertBefore(xNeedCheckCard, null);
        blockNeedCheckCard.insertBefore(countBlockCheckCard, null);
        blockNeedCheckCard.insertBefore(totalBlockCheckCard, null);
        blockNeedCheckCard.insertBefore(imgBlockCheckCard, null);
        imgBlockCheckCard.insertBefore(imgNeedBlockCheckCard, null);

        //  Confirm Pay menu
        const contentConfirmPay = document.createElement("div");
        const nameConfirmPay = document.createElement("div");
        const blockConfirmPay = document.createElement("div");
        const priceConfirmPay = document.createElement("div");
        const pricePConfirmPay = document.createElement("div");
        const priceXConfirmPay = document.createElement("div");
        const priceCConfirmPay = document.createElement("div");
        const totalConfirmPay = document.createElement("div");

        nameConfirmPay.appendChild(document.createTextNode(name));
        pricePConfirmPay.appendChild(document.createTextNode(`$${price}`));
        priceXConfirmPay.appendChild(document.createTextNode("x"));
        priceCConfirmPay.appendChild(document.createTextNode("1"));
        totalConfirmPay.appendChild(document.createTextNode(`$${price}`));

        contentConfirmPay.className = "main-confirm-pay__content";
        nameConfirmPay.className = "main-confirm-pay__name";
        blockConfirmPay.className = "main-confirm-pay__block";
        priceConfirmPay.className = "main-confirm-pay__block_price";
        pricePConfirmPay.className = "main-confirm-pay__block_price_p";
        priceXConfirmPay.className = "main-confirm-pay__block_price_x";
        priceCConfirmPay.className = "main-confirm-pay__block_price_c";
        totalConfirmPay.className = "main-confirm-pay__block_total";

        insertAfter(menuConfirmPay.firstChild, contentConfirmPay);
        contentConfirmPay.insertBefore(nameConfirmPay, null);
        contentConfirmPay.insertBefore(blockConfirmPay, null);
        blockConfirmPay.insertBefore(priceConfirmPay, null);
        priceConfirmPay.insertBefore(pricePConfirmPay, null);
        priceConfirmPay.insertBefore(priceXConfirmPay, null);
        priceConfirmPay.insertBefore(priceCConfirmPay, null);
        blockConfirmPay.insertBefore(totalConfirmPay, null);
    } else {
        let needIdxCard = 0;
        const countCheckCard = document.querySelectorAll(".main-vcards__aftpayment_checkcard_count");
        for (let i = 0; i < countCheckCard.length; i++) {
            if (countCheckCard[i].children[0].innerHTML === name) {
                needIdxCard = i;
                break;
            }
        }
        const totalBlockCard = document.querySelectorAll(
            ".main-vcards__aftpayment_checkcard_count_total",
        )[needIdxCard];
        const countBlockCard = document.querySelectorAll(
            ".main-vcards__aftpayment_checkcard_count_count",
        )[needIdxCard];
        const priceBlockCard = document.querySelectorAll(
            ".main-vcards__aftpayment_checkcard_count_total",
        )[needIdxCard];
        const priceBasketCurrent = Number(priceBlockCard.innerHTML.split("$")[1]) + Number(price);
        totalBlockCard.innerHTML = `$${priceBasketCurrent.toFixed(2)}`;
        countBlockCard.innerHTML = Number(countBasketCard[needCrypto].innerHTML) + 1;
        console.log("sdasdas");
    }

    countBasket[0].style.display = "block";
    activeBasketCardMoreZero[needCrypto * (2 * 2) - needCrypto + 1].classList.add(
        "main-vcards__currency_block_r_active",
    );
    countBasket[0].innerHTML = Number(countBasket[0].innerHTML) + 1;
    countBasket[1].style.display = "block";
    activeBasketCardMoreZero[needCrypto * (2 * 2) - needCrypto + 1].classList.add(
        "main-vcards__currency_block_r_active",
    );
    countBasket[1].innerHTML = Number(countBasket[1].innerHTML) + 1;
    const priceBasketCurrent = Number(priceBasket[0].innerHTML.split("$")[1]) + Number(price);
    totalCountCheckCard.innerHTML = `$${priceBasketCurrent.toFixed(2)}`;
    priceBasket[0].innerHTML = `$${priceBasketCurrent.toFixed(2)}`;
    priceBasket[1].innerHTML = `$${priceBasketCurrent.toFixed(2)}`;
    priceBasketMobile.innerHTML = `$${priceBasketCurrent.toFixed(2)}`;
    countBasketCard[needCrypto].innerHTML = Number(countBasketCard[needCrypto].innerHTML) + 1;
    console.log("priceBasketCurrent -->", priceBasketCurrent);
    totalPriceMenuConfirmPay[0].innerHTML = `$${priceBasketCurrent.toFixed(2)}`;
    console.log("priceCardCurrency -->", priceCardCurrency);
    priceCardCurrency[needCrypto].innerHTML = `$${(
    Number(priceCardCurrency[needCrypto].innerHTML.split("$")[1]) + price
  ).toFixed(2)}`;
}

function subCard(needCrypto, name, price) {
    let needIdxCard = 0;
    const countCheckCard = document.querySelectorAll(".main-vcards__aftpayment_checkcard_count");
    for (let i = 0; i < countCheckCard.length; i++) {
        if (countCheckCard[i].children[0].innerHTML === name) {
            needIdxCard = i;
            break;
        }
    }
    if (Number(countBasket[0].innerHTML) > 1 || Number(countBasket[1].innerHTML) > 1) {
        countBasket[0].innerHTML = Number(countBasket[0].innerHTML) - 1;
        countBasket[1].innerHTML = Number(countBasket[1].innerHTML) - 1;
        const priceBasketCurrent = Number(priceBasket[0].innerHTML.split("$")[1]) - Number(price);
        priceBasket[0].innerHTML = `$${priceBasketCurrent.toFixed(2)}`;
        priceBasket[1].innerHTML = `$${priceBasketCurrent.toFixed(2)}`;
        priceBasketMobile.innerHTML = `$${priceBasketCurrent.toFixed(2)}`;
        //
        const totalBlockCard = document.querySelectorAll(
            ".main-vcards__aftpayment_checkcard_count_total",
        )[needIdxCard];
        const countBlockCard = document.querySelectorAll(
            ".main-vcards__aftpayment_checkcard_count_count",
        )[needIdxCard];
        const priceBlockCard = document.querySelectorAll(
            ".main-vcards__aftpayment_checkcard_count_total",
        )[needIdxCard];
        const priceBasketCurrentTwo = Number(priceBlockCard.innerHTML.split("$")[1]) - Number(price);
        totalBlockCard.innerHTML = `$${priceBasketCurrentTwo.toFixed(2)}`;
        countBlockCard.innerHTML = Number(countBasketCard[needCrypto].innerHTML) - 1;
    } else {
        countCheckCard[needIdxCard].remove();
        countBasket[0].style.display = "none";
        countBasket[0].innerHTML = 0;
        countBasket[1].style.display = "none";
        countBasket[1].innerHTML = 0;
        priceBasket[0].innerHTML = `$0`;
        priceBasket[1].innerHTML = `$0`;
        priceBasketMobile.innerHTML = `$0`;
        menuCheckCard.style.display = "none";
        for (let i = 0; i < linkScrollHeader.length; i++) {
            linkScrollHeader[i].style.marginRight = "15px";
        }
    }
    if (Number(countBasketCard[needCrypto].innerHTML) >= 1) {
        countBasketCard[needCrypto].innerHTML = Number(countBasketCard[needCrypto].innerHTML) - 1;
    }
    const priceCurrentNeed = Number(totalCountCheckCard.innerHTML.split("$")[1]) - Number(price);
    totalCountCheckCard.innerHTML = `$${priceCurrentNeed.toFixed(2)}`;
    priceCardCurrency[needCrypto].innerHTML = `$${(
    Number(priceCardCurrency[needCrypto].innerHTML.split("$")[1]) - price
  ).toFixed(2)}`;
    if (Number(countBasketCard[needCrypto].innerHTML) === 0) {
        activeBasketCardMoreZero[needCrypto * (2 * 2) - needCrypto + 1].classList.remove(
            "main-vcards__currency_block_r_active",
        );
        countCheckCard[needIdxCard].remove();
    }
}

btnSelectPaymentUnsel.addEventListener("click", (e) => {
    if (selectMenuPayment.style.display === "" || selectMenuPayment.style.display === "none") {
        selectMenuPayment.style.display = "block";
        selectPaymentArrow.style.transform = "scale(1,-1)";
    } else {
        selectMenuPayment.style.display = "none";
        selectPaymentArrow.style.transform = "none";
    }
    e.preventDefault();
});

btnSelectPaymentSel.addEventListener("click", (e) => {
    if (selectMenuPayment.style.display === "" || selectMenuPayment.style.display === "none") {
        selectMenuPayment.style.display = "block";
        selectPaymentArrow.style.transform = "scale(1,-1)";
    } else {
        selectMenuPayment.style.display = "none";
        selectPaymentArrow.style.transform = "none";
    }
    e.preventDefault();
});

let started = false;

var count = 3;
// запуск таймера по кнопке
function startConfirmPayTimer() {
    // если таймер уже запущен — выходим из функции
    if (started) {
        return;
    }
    // запоминаем время нажатия
    var start_time = new Date();
    // получаем время окончания таймера
    var stop_time = start_time.setMinutes(start_time.getMinutes() + count);

    // запускаем ежесекундный отсчёт
    var countdown = setInterval(function () {
        // текущее время
        var now = new Date().getTime();
        // сколько времени осталось до конца таймера
        var remain = stop_time - now;
        // переводим миллисекунды в минуты и секунды
        var min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((remain % (1000 * 60)) / 1000);
        // если значение текущей секунды меньше 10, добавляем вначале ведущий ноль
        sec = sec < 10 ? "0" + sec : sec;
        // отправляем значение таймера на страницу в нужный раздел
        document.querySelector(".main-confirm-timer__time").innerHTML = min + ":" + sec;
        // если время вышло
        if (remain < 0) {
            // останавливаем отсчёт
            clearInterval(countdown);
            // пишем текст вместо цифр
            document.querySelector(".main-confirm-timer__time").innerHTML = "00:00";
        }
    }, 1000);
    // помечаем, что таймер уже запущен
    started = true;
}

let startedTwo = false;

var countTwo = 30;
// запуск таймера по кнопке
function startPayCrypto() {
    // если таймер уже запущен — выходим из функции
    if (startedTwo) {
        return;
    }
    // запоминаем время нажатия
    var start_time = new Date();
    // получаем время окончания таймера
    var stop_time = start_time.setMinutes(start_time.getMinutes() + countTwo);

    // запускаем ежесекундный отсчёт
    var countdown = setInterval(function () {
        // текущее время
        var now = new Date().getTime();
        // сколько времени осталось до конца таймера
        var remain = stop_time - now;
        // переводим миллисекунды в минуты и секунды
        var min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((remain % (1000 * 60)) / 1000);
        // если значение текущей секунды меньше 10, добавляем вначале ведущий ноль
        sec = sec < 10 ? "0" + sec : sec;
        // отправляем значение таймера на страницу в нужный раздел
        document.querySelector(".main-paycrypto-timer__time").innerHTML = min + ":" + sec;
        // если время вышло
        if (remain < 0) {
            // останавливаем отсчёт
            clearInterval(countdown);
            // пишем текст вместо цифр
            document.querySelector(".main-paycrypto-timer__time").innerHTML = "00:00";
        }
    }, 1000);
    // помечаем, что таймер уже запущен
    startedTwo = true;
}

btnBuyNowCard.addEventListener("click", (e) => {
    e.preventDefault();
    if (isSelectNeedCrypto === true) {
        mainHomeMenu.style.display = "none";
        mainConfirmMenuOne.style.display = "flex";
        startConfirmPayTimer();
    }
});

cancelPayment.addEventListener("click", (e) => {
    e.preventDefault();
    mainHomeMenu.style.display = "block";
    mainConfirmMenuOne.style.display = "none";
});

nextPayment.addEventListener("click", (e) => {
    console.log("1");
    e.preventDefault();
    if (inputPayment.value.length > 5) {
        mainConfirmMenuOne.style.display = "none";
        mainPayCrypto.style.display = "flex";
        startPayCrypto();
    }
});

btnCancelPayCrypto.addEventListener("click", (e) => {
    e.preventDefault();
    mainPayCrypto.style.display = "none";
    mainHomeMenu.style.display = "block";
});

btnNextPayCrypto.addEventListener("click", (e) => {
    e.preventDefault();
    mainPayCrypto.style.display = "none";
    menuPayFinish.style.display = "flex";
});
