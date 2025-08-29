// Custom Script
// ==================================================
function getId(id) {
  return document.getElementById(id);
}

function queryAll(allClass) {
  return document.querySelectorAll(allClass);
}

// ==================================================
// Index Page
// ==================================================

// --------------------------------------------------
// Global Functions
// --------------------------------------------------
const headerHeart = getId('header-heart');
// console.log(headerHeart);
const cardHearts = queryAll('.card-heart');
// console.log(cardHeart);
let headerHeartNum = getId('header-heart-num');
// console.log(headerHeartNum);
const callBtns = queryAll('.call-btn');
// console.log(callBtns);
const headerCoin = getId('header-coin');
// console.log(headerCoin);
let headerCoinNum = getId('header-coin-num');
// console.log(headerCoinNum);
const notPermittedCallModal = getId('not-permitted-call-modal');
// console.log(notPermittedCallModal);
const notPermittedCallCancelBtn = getId('not-permitted-call-cancel-btn');
// console.log(notPermittedCallCancelBtn);
const coinRechargeBtn = getId('coin-recharge-btn');
// console.log(coinRechargeBtn);
const permittedCallModal = getId('permitted-call-modal');
// console.log(permittedCallModal);
const permittedCallCancelBtn = getId('permitted-call-cancel-btn');
// console.log(permittedCallCancelBtn);
const callNowBtn = getId('call-now-btn');
// console.log(callNowBtn);

// --------------------------------------------------
// Heart Icon Functions
// --------------------------------------------------
for (const heart of cardHearts) {
  //   console.log(card);
  heart.addEventListener('click', function (e) {
    // console.log('Heart Clicked');
    let headerHeartNumConverted = parseInt(headerHeartNum.innerText);
    //   console.log(headerHeartNumConverted);
    headerHeartNumConverted++;
    //   console.log(headerHeartNumConverted);
    headerHeartNum.innerText = headerHeartNumConverted;

    headerHeart.classList.add('transition-all', 'duration-100', '-rotate-15');
    setTimeout(() => {
      headerHeart.classList.remove('-rotate-15');
      headerHeart.classList.add('rotate-15');
      setTimeout(() => {
        headerHeart.classList.remove('rotate-15');
      }, 100);
    }, 100);
  });
}

// --------------------------------------------------
// Call Button Functions
// --------------------------------------------------

for (const btn of callBtns) {
  // console.log(btn);
  btn.addEventListener('click', function (e) {
    // console.log('Call Now Button Clicked');

    let headerCoinNumConverted = parseInt(headerCoinNum.innerText);
    // console.log(headerCoinNumConverted);

    // Not Permitted Call
    if (headerCoinNumConverted < 20) {
      // console.log('Not Enough Coin to Make this Call');
      notPermittedCallModal.classList.remove('hidden');
      notPermittedCallModal.classList.add('flex');

      notPermittedCallCancelBtn.addEventListener('click', function (e) {
        // console.log('Call Cancel Button Clicked');
        notPermittedCallModal.classList.remove('flex');
        notPermittedCallModal.classList.add('hidden');
      });

      const coinRechargeBtnDefaultHtml = coinRechargeBtn.innerHTML;
      // console.log(coinRechargeBtnDefaultText);

      coinRechargeBtn.addEventListener('click', function (e) {
        // console.log('Coin Recharge Button Clicked');
        coinRechargeBtn.innerHTML = 'Possessing';
        setTimeout(() => {
          coinRechargeBtn.innerHTML = coinRechargeBtnDefaultHtml;
        }, 1000);
      });

      // Permitted Call
    } else {
      // console.log("You're Calling");
      permittedCallModal.classList.remove('hidden');
      permittedCallModal.classList.add('flex');

      permittedCallCancelBtn.addEventListener('click', function (e) {
        // console.log('Call Cancel Button Clicked');
        permittedCallModal.classList.remove('flex');
        permittedCallModal.classList.add('hidden');
      });

      callNowBtn.addEventListener('click', function (e) {
        // console.log('Call Now Button Clicked');
        headerCoinNumConverted -= 20;
        // console.log(headerCoinNumConverted);
        headerCoinNum.innerText = headerCoinNumConverted;

        permittedCallModal.classList.remove('flex');
        permittedCallModal.classList.add('hidden');

        headerCoin.classList.add(
          'animate-spin',
          '[animation-timing-function:linear]',
          'duration-300'
        );
        setTimeout(() => {
          headerCoin.classList.remove(
            'animate-spin',
            '[animation-timing-function:linear]',
            'duration-300'
          );
        }, 500);
      });
    }
  });
}