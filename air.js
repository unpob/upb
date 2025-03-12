window.addEventListener('load', () => {
    const score = localStorage.getItem('score') ? parseFloat(localStorage.getItem('score')) : 0;
    usdtInput.value = score;
    const bnbValue = score / exchangeRate;
    bnbInputvalue = Math.floor(bnbValue);
    bnbInput.value = Math.min(bnbInputvalue, 50);
    document.getElementById("bdtrate").innerText = "1000 coin = 5 টাকা";
});
function metallicErrorVibration() {
    if ("vibrate" in navigator) {
   
       navigator.vibrate([50, 50]);         } else {
        console.log("Vibration API not supported");
    }
}
  function doneVibration() {
    if ("vibrate" in navigator) {
   
     navigator.vibrate([
        70, 500, 70, 400 ,300,200// First shake (left, right)
            ]);        } else {
        console.log("Vibration API not supported");
    }
  }function redVibration() {
    if ("vibrate" in navigator) {
   
     navigator.vibrate([
        120, 260, 80, 200// First shake (left, right)
            ]);        } else {
        console.log("Vibration API not supported");
    }
} 
const holdButton = document.getElementById('holdButton');
const progressBar = document.getElementById('progressBar');

const score = localStorage.getItem('score') ? parseFloat(localStorage.getItem('score')) : 0;
const vvl = score;
const exchangeRate = 200;

const usdtInput = document.getElementById('usdt');
const bnbInput = document.getElementById('bnb');
const submitBtn = document.getElementById('boost');

usdtInput.addEventListener('input', function () {
    const usdtValue = parseFloat(usdtInput.value);
    if (!isNaN(usdtValue)) {
        const bnbValue = usdtValue / exchangeRate;
        bnbInput.value = Math.floor(bnbValue);
    } else {
        bnbInput.value = '0';
    }
});
let holdTimer;
let progress = 0;
holdButton.addEventListener('mousedown', startHold);
holdButton.addEventListener('touchstart', startHold);
document.addEventListener('mouseup', stopHold);
document.addEventListener('touchend', stopHold);

function startHold(e) {
    e.preventDefault();
    progress = 0;
    progressBar.style.width = '0%';
    
    holdTimer = setInterval(() => {
        progress += 5;
        progressBar.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(holdTimer);
            document.getElementById('boost').click();
        }
    }, 100); // 3000ms / 30 intervals = 100ms each
}

function stopHold() {
    clearInterval(holdTimer);
    if (progress < 100) {
        progressBar.style.width = '0%';
    }
}
 function done() {
     progressBar.style.padding = '0px';
        progressBar.style.width = '0%';
     holdButton.style.backgroundColor = '#007bff';
     holdButton.innerHTML = '<i class="fa-duotone fa-solid fa-badge-check"></i>';
    setTimeout(() => {
                        window.location.replace('user.html');
                    }, 2500);
 }
    
function retry() {
    redVibration();
     progressBar.style.padding = '5px';
     progressBar.innerHTML = '<i class="fa-duotone fa-solid fa-exclamation"></i>';
    progressBar.style.backgroundColor = 'red';
    setTimeout(() => {
        location.reload();
    }, 2500);
    
 }    

submitBtn.addEventListener('click', () => {
    // Show popup and disable the button
    document.getElementById("popup").classList.add("active");
    
    // Retrieve secure data from local storage
    const secureData = JSON.parse(localStorage.getItem("secureData")) || {};
    const name = secureData.name || 'Guest';
    const id = secureData.cvv;
    const amount = Math.floor(parseFloat(bnbInput.value));
    const coin = parseFloat(usdtInput.value);
    const msg2 = "বোনাস Redeem $UPNXT";
    const description = id;
    const selfid = secureData.formId;
    const sa = secureData.saEntry;
    const sd = secureData.sdEntry;
    const sr = secureData.srEntry;

    if (amount >= 5) {
        // Form data and URLs
        const dbloc1 = `${dgif}/1FAIpQLSdhJ-tQgQ79WAej4BQ-Ok8_-Bf-vhUwLabYO4fO-iFd4sCdHA/${dgfie}`;
        const dbloc2 = `${dgif}/${selfid}/${dgfie}`;
        const dbloc3 = `${dgif}/1FAIpQLSdZD1S37ULPgJGtE0xRF6CXp4KjMpsaLR1yFVfpSAxC0GxBcw/${dgfie}`;

        const dblocd1 = new FormData();
        dblocd1.append('entry.1014140243', `-${amount}`);
        dblocd1.append('entry.233163644', `${name} [${id}]`);
        dblocd1.append('entry.1511985907', `UP Point Bonus ${coin}`);

        const dblocd2 = new FormData();
        dblocd2.append(`entry.${sa}`, `${amount}`);
        dblocd2.append(`entry.${sd}`, `Total point ${coin}`);
        dblocd2.append(`entry.${sr}`, msg2);

        const dblocd3 = new FormData();
        dblocd3.append('entry.1279060761', '0');
        dblocd3.append('entry.1309482453', `${name} [${id}]`);
        dblocd3.append('entry.908621085', `UP Point Bonus ${coin}`);

        // Promise.all for fetch requests
        Promise.all([
            fetch(dbloc1, { method: 'POST', body: dblocd1, mode: 'no-cors' }),
            fetch(dbloc2, { method: 'POST', body: dblocd2, mode: 'no-cors' }),
            fetch(dbloc3, { method: 'POST', body: dblocd3, mode: 'no-cors' })
        ])
        .then(() => {
          localStorage.setItem('score', 0);
          localStorage.removeItem('cash');
   
            const bdtrate = document.getElementById('bdtrate');
            bdtrate.style.color = 'green';
            bdtrate.style.fontSize = '20px';
            bdtrate.style.fontWeight = 'bold';
            bdtrate.innerText = `${amount}৳ পেয়েছেন`;

            document.getElementById("popup").classList.remove("active");
           
            setTimeout(() => {
                window.location.href = "user.html";
            }, 1500);
        })
        .catch(() => {
            const bdtrate = document.getElementById('bdtrate');
            bdtrate.innerText = 'Failed to submit data';
retry();
        });
    } else {
        // Handle invalid amount
        document.getElementById("popup").classList.remove("active");
        const bdtrate = document.getElementById('bdtrate');
        bdtrate.innerText = `৫ টাকার কম নিতে পারবেন না`;
metallicErrorVibration();
   retry(); }
});
