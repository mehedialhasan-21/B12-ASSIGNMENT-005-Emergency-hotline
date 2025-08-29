// ==================================================
// Custom Function (Done ✅)
// ==================================================
function getId(id) {
  return document.getElementById(id);
}
function queryAll(allClass) {
  return document.querySelectorAll(allClass);
}

// ==================================================
// Global Variables (Done ✅)
// ==================================================
const headerHeart = getId('header-heart');
// console.log(headerHeart);
let cardHearts = queryAll('.card-heart');
// console.log(cardHearts);
let headerHeartNum = getId('header-heart-num');
// console.log(headerHeartNum);

const headerCoin = getId('header-coin');
// console.log(headerCoin);
let headerCoinNum = getId('header-coin-num');
// console.log(headerCoinNum);

let headerCopyNum = getId('header-copy-num');
// console.log(headerCopyNum);
const copyBtns = queryAll('.copy-btn');
// console.log(copyBtns);
const copyModal = getId('copy-modal');
// console.log(copyModal);

const callBtns = queryAll('.call-btn');
// console.log(callBtns);

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

const callHistory = getId('call-history');
// console.log(callHistory);

const serviceImage = queryAll('.img');
// console.log(serviceImage);
const serviceNames = queryAll('.service-name');
// console.log(serviceNames);
const serviceNums = queryAll('.service-num');
// console.log(serviceNums);

const modalImages = queryAll('.modal-image');
// console.log(modalImages);
const modalServiceNames = queryAll('.modal-service-name');
// console.log(modalServiceNames);
const modalServiceNums = queryAll('.modal-service-num');
// console.log(modalServiceNums);

const userCoins = queryAll('.user-coins');
// console.log(userCoins);

const clearBtn = getId('clear-btn');
// console.log(clearBtn);
const noHistory = getId('no-history');
// console.log(noHistory);

// ==================================================
// Current Service Info (Done ✅)
// ==================================================
let currentServiceImage = '';
let currentServiceName = '';
let currentServiceNum = '';

// ==================================================
// Header User Activity Info (Done ✅)
// ==================================================
// Header Heart
let headerHeartNumConverted = parseInt(headerHeartNum.innerText);
// console.log(headerHeartNumConverted);
// Header Coin
let headerCoinNumConverted = parseInt(headerCoinNum.innerText);
// console.log(headerCoinNumConverted);
// Header Copy
let headerCopyNumConverted = parseInt(headerCopyNum.innerText);
// console.log(headerCopyNumConverted);

// ==================================================
// Helper Function (Done ✅)
// ==================================================
// Function to Show Modal
function showModal(modal) {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// Function to Hide Modal
function hideModal(modal) {
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

// Function to update Modal Content with Service Info
function updateModalContent(serviceImage, serviceName, serviceNum) {
  // Update all Modal Images
  for (const modalImage of modalImages) {
    modalImage.src = serviceImage;
  }

  // Update all Modal Service Names
  for (const modalServiceName of modalServiceNames) {
    modalServiceName.innerText = serviceName;
  }

  // Update all Modal Service Numbers
  for (const modalServiceNum of modalServiceNums) {
    modalServiceNum.innerText = serviceNum;
  }

  // Update Total Coin displays in Modals
  for (const userCoin of userCoins) {
    userCoin.innerText = headerCoinNumConverted;
  }
}

// ==================================================
// Heart Button Functionality (Done ✅)
// ==================================================
for (const heart of cardHearts) {
  // console.log(heart);
  heart.addEventListener('click', function (e) {
    // console.log('Heart Clicked');
    headerHeartNumConverted++; // 1 kore baralam
    // console.log(headerHeartNumConverted);
    headerHeartNum.innerText = headerHeartNumConverted; // UI te dekhalam

    // Set Animation
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

// ==================================================
// Copy Button Functionality (Done ✅)
// ==================================================
for (const btn of copyBtns) {
  // console.log(btn);
  btn.addEventListener('click', function (e) {
    // console.log('Copy Button Clicked');
    headerCopyNumConverted++; // 1 kore baralam
    // console.log(headerCopyNumConverted);
    headerCopyNum.innerText = headerCopyNumConverted; // UI te dekhalam

    const copyBtnDefaultHtml = btn.innerHTML; // Purotiyy back korabo pore / Temp hishebe rakhlam
    // console.log(copyBtnDefaultHtml)

    btn.innerText = 'Copied'; // UI te dekhalam

    btn.disabled = true; //For prevent Multiple Clicks (Otherwise nicher 1500ms er ageei click korle "Copied" default hoye thakbe)

    setTimeout(() => {
      btn.innerHTML = copyBtnDefaultHtml;
      btn.disabled = false;
    }, 1500);

    const serviceCard = this.closest('article'); // Parent ke dhorlam

    const serviceNum = serviceCard.querySelector('.service-num').innerText; // Parent theke number nilam

    currentServiceNum = serviceNum; // dhora number tike currentServiceNum aaa rakhlam

    // Copy Modal
    function showCopyModal(currentServiceNum) {
      navigator.clipboard.writeText(currentServiceNum); // Number Copy kore rakhlam, onno upayeow kora jay - eti updated

      // Modal er Text with Design
      copyModal.innerHTML =
        'Text Copied Successfully : &nbsp <span class="font-bold font-mono text-[blue]">' +
        currentServiceNum +
        '</span>';

      // Modal Down from Top
      copyModal.classList.remove('opacity-0', '-top-20'); // -top-20(80px) rakha hoyeche karon display er upor theke asbe mone hobe / top-0 rakhle display er shuru theke asbe mone hobe
      copyModal.classList.add('opacity-100', 'top-8'); // opacity er karone blur hoye nambee

      // Modal Up from Down
      setTimeout(() => {
        copyModal.classList.remove('opacity-100', 'top-8');
        copyModal.classList.add('opacity-0', '-top-20');
      }, 1500); // 1.5s aaa ghotbe
    }

    // Show Copy Modal
    showCopyModal(currentServiceNum);
  });
}

// ==================================================
// Call Button Functionality (Done ✅)
// ==================================================
for (const btn of callBtns) {
  // console.log(btn);
  btn.addEventListener('click', function (e) {
    // console.log('Call Now Button Clicked');

    const serviceCard = this.closest('article'); // Father ke dhore fellam

    const serviceImage = serviceCard.querySelector('img').src; // Father er Image
    // console.log(serviceImage); //wow

    const serviceName = serviceCard.querySelector('h2').innerText; // Father er Name
    // console.log(serviceName);  //wow

    const serviceNum = serviceCard.querySelector('.service-num').innerText; // Father er Num
    // console.log(serviceNum); //wow

    // Bose er kachee pathay dilam
    currentServiceImage = serviceImage;
    currentServiceName = serviceName;
    currentServiceNum = serviceNum;

    // Bose er nicher machine challu
    updateModalContent(serviceImage, serviceName, serviceNum);

    // Kon Modal dekhabo ?
    if (headerCoinNumConverted < 20) {
      // Not enough coins - show not permitted modal
      showModal(notPermittedCallModal);
    } else {
      // Enough coins - show permitted modal
      showModal(permittedCallModal);
    }
  });
}


// Modal Cancel Button Functionality (Done ✅)

// Cancel button for Not Permitted Call Modal
notPermittedCallCancelBtn.addEventListener('click', function (e) {
  hideModal(notPermittedCallModal);
});

// Cancel button for Permitted Call Modal
permittedCallCancelBtn.addEventListener('click', function (e) {
  hideModal(permittedCallModal);
});


// Recharge Button Functionality (Done ✅)

const coinRechargeBtnDefaultHtml = coinRechargeBtn.innerHTML; // Temp hishebe dhore rakhlam / Pore back korabo

coinRechargeBtn.addEventListener('click', function (e) {
  // Change Button Text Temporarily
  coinRechargeBtn.innerHTML = 'Processing';

  coinRechargeBtn.disabled = true; // Disable button to prevent Multiple Clicks

  // Reset after 1.5 second
  setTimeout(() => {
    coinRechargeBtn.innerHTML = coinRechargeBtnDefaultHtml;
    coinRechargeBtn.disabled = false;
  }, 1500);
});

// ==================================================
// Call Now Button Functionality (Done ✅)
// ==================================================
callNowBtn.addEventListener('click', function (e) {
  noHistory.style.display = 'none';

  // Hide the Modal first
  hideModal(permittedCallModal);

  // Deduct Coins from User's Balance
  headerCoinNumConverted -= 20;
  headerCoinNum.innerText = headerCoinNumConverted;

  // Play Coin Spin Animation
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
  }, 600);

  // Create New Call History Item
  const callHistoryCard = document.createElement('div');
  callHistoryCard.className =
    'flex justify-between items-center gap-2.5 w-full mx-auto bg-[#f2f2f2] font-medium text-base sm:text-sm md:text-sm 2xl:text-base px-4 py-2 rounded-2xl';

  // Fixed HTML structure for proper display
  callHistoryCard.innerHTML = `
    <div class="flex-1">
      <h3 class="font-semibold text-sm leading-tight">${currentServiceName}</h3>
      <p class="text-sm text-gray-600 mt-1">Hotline: ${currentServiceNum}</p>
    </div>
    <div class="text-right text-xs text-gray-500 flex-shrink-0">
      <p>${new Date().toLocaleDateString()}</p>
      <p>${new Date().toLocaleTimeString()}</p>
    </div>
  `;

  // Add to history
  callHistory.insertBefore(callHistoryCard, callHistory.firstChild); // Vaag bataa nichee

  // Clear Button to Clear History
  clearBtn.addEventListener('click', function (e) {
    callHistoryCard.style.display = 'none';
    noHistory.style.display = 'block'; // Default Text dekhalam
  });
});