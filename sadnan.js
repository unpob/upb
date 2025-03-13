const inputs = document.querySelectorAll('.form-header input, .form-group input');
const sendButton = document.getElementById('send-button');
      const holdButton = document.getElementById('holdButton');
const progressBar = document.getElementById('progressBar');
document.querySelector('.no-connection-popup').style.zIndex = '1001';
inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            sendButton.classList.add('active');
        } else {
            sendButton.classList.remove('active');
        }
    });
});
document.getElementById("popup").classList.add("active");
const abcdhhsUrl = `${dgistart}/1AX5IYcOsV8vCGyAoj1mUi9r_Zd51UbLkudv8uPqSMcI/gviz/tq?tqx=out:csv`;
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
} function metallicErrorVibration2() {
    if ("vibrate" in navigator) {
   
       navigator.vibrate([50, 50]);         } else {
        console.log("Vibration API not supported");
    }
}
let profiles = {}; // This will hold the phone number -> image URL mapping

// Fetch and parse the abcdhhs file
async function fetchabcdhhs() {
    try {
        const response = await fetch(abcdhhsUrl);
        const abcdhhsText = await response.text();

        // Parse abcdhhs into rows and columns
        const rows = abcdhhsText.split('\n').filter(row => row.trim() !== '');
        const data = rows.map(row => {
            return row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
                .map(cell => cell.replace(/^"|"$/g, '').trim());
        });

        // Map the phone number (column 1) to the image URL (column 9)
        profiles = data.reduce((acc, row) => {
            const phoneNumber = row[1]; // Column 1 is phone number
            const frmId = row[4];        // Form ID
            const sdEntry = row[5];      // SD Entry
            const srEntry = row[6];      // SR Entry
            const saEntry = row[7]; 
            const xname = row[2];        // Example: SA Entry
            const imageUrl = row[8];     // Column 9 is the image URL
const stat= row[13];

            // Store the data if phone number and image URL exist
            if (phoneNumber && imageUrl) {
                acc[phoneNumber] = {stat, frmId, sdEntry, srEntry, saEntry, xname, imageUrl };
            }

            return acc;
        }, {});
    } catch (error) {
    }
}

// Update the profile picture and fields based on the entered phone number
function updateProfile(phonenumber) {
    const profilePic = document.getElementById('profilePic');

    // Check if the phone number is exactly 11 digits
    if (phonenumber.length === 11 && !isNaN(phonenumber)) {
        // Check if the phone number exists in profiles
        if (profiles[phonenumber]) {
            const { stat, frmId, sdEntry, srEntry, saEntry, xname, imageUrl } = profiles[phonenumber];

            if(imageUrl !== 'not added'){  // Update the profile picture and form fields
            profilePic.src = imageUrl;} else {
             profilePic.src = 'Logoup.jpg';
         }
         document.getElementById('formid').value = frmId || 'N/A';
            document.getElementById('sde').value = sdEntry || 'N/A';
            document.getElementById('sre').value = srEntry || 'N/A';
            document.getElementById('sae').value = saEntry || 'N/A';
            document.getElementById('acname').value = xname;
             let   hisname = document.getElementById('hisname');
           if(hisname && stat !== 'ban'){
                document.getElementById('hisname').innerText = xname;
            }
            else{profilePic.src = 'banuser.jpg';
                       document.getElementById('hisname').style.color = 'red';
        holdButton.style.display = 'none';
                        document.getElementById('hisname').innerText = 'একাউন্ট বন্ধ';
        
 }
        } else {
                 document.getElementById('hisname').innerText = 'একাউন্ট নেই';
           // Default if no profile is found for the phone number
            profilePic.src = 'nouser.png';
            document.getElementById('formid').value = 'N/A';
            document.getElementById('sde').value = 'N/A';
            document.getElementById('sre').value = 'N/A';
            document.getElementById('sae').value = 'N/A';
        }
    } else {
        // Default if input is invalid or empty
        profilePic.src = phonenumber ? 'user.jpg' : 'who.png';
        document.getElementById('formid').value = 'N/A';
        document.getElementById('sde').value = 'N/A';
        document.getElementById('sre').value = 'N/A';
        document.getElementById('sae').value = 'N/A';
    }
}

// Function to manually parse query parameters from the URL
function getQueryParams() {
    const queryString = window.location.search; // Get the query string from the URL
    const params = {};

    if (queryString) {
        const pairs = queryString.substring(1).split("&"); // Remove "?" and split parameters
        for (const pair of pairs) {
            const [key, value] = pair.split("="); // Split key and value
            params[decodeURIComponent(key)] = decodeURIComponent(value || "");
        }
    }

    return params; // Return an object with all parameters
}

window.onload = async function () {
    await fetchabcdhhs(); // Wait for data fetching

    // Extract query parameters using the custom function
    const params = getQueryParams();

    // Check if the 'name' parameter exists in the query
    if (params.name) {
        const nameValue = params.name.trim(); // Get and trim the 'name' value
        const numberInput = document.getElementById('name'); // Get the input field

        if (numberInput) {
            numberInput.value = nameValue; // Set input field value
            updateProfile(nameValue); // Execute the profile update logic
        } else {
        }
    } else {
    }
};

document.addEventListener("DOMContentLoaded", function() {
    let fetchedDataValue; // Global variable to store fetched data
let  totalRows;

    function fetchData() {
        const secureData = JSON.parse(localStorage.getItem('secureData'));
        const tbl = parseInt(secureData.tbl, 10); // Fetching the table number from local storage and converting to an integer
        if (isNaN(tbl)) {
            return;
        }

        const url= `${dgistart}/${secureData.sheetId}/${dgih}`;
fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(data, 'text/html');
                const tables = htmlDoc.querySelectorAll('table');

                if (tbl >= tables.length) {
                    window.location.href = 'index.html';
                    return;
                }
const table = tables[tbl];
                totalRows = table.rows.length;

                const cellElement = tables[tbl].rows[3].cells[4]; // Fetching data from the specified table, row 4, column 2
                const cellText = cellElement.innerText || cellElement.textContent;
                fetchedDataValue = parseFloat(cellText.trim()); // Corrected here
                animateText(`${cellText} ৳`, 'balance', 'letter');
  
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function animateText(text, elementId, className) {
        const element = document.getElementById(elementId);
        element.innerHTML = ''; // Clear any existing content

        text.split('').forEach((char, index) => {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space for spaces
            letterSpan.classList.add(className);
            letterSpan.style.animationDelay = `${index * 0.1}s`;
            element.appendChild(letterSpan);
        });
    }

  Promise.all([
    fetchData()

    ]).then(() => {
        
document.getElementById("popup").classList.remove("active");

    }).catch(error => {
        document.getElementById("popup").classList.remove("active");

        console.error("Error in fetching data:", error);
    });
let holdTimer;
let progress = 0;
  
 const suced = document.getElementById('popsimgg');
        const failed = document.getElementById('no-connection-popup2');
        const doned = document.getElementById('no-connection-popup3');
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
            clearInterval(holdTimer);metallicErrorVibration2();
            document.getElementById('send-button').click();
        }
    }, 100); // 3000ms / 30 intervals = 100ms each
}

function stopHold() {
    clearInterval(holdTimer);
    if (progress < 100) {
        progressBar.style.width = '0%';
    }
}
 function done() {doneVibration();
    suced.src = 'done.gif';
                 doned.classList.add('visible');
     progressBar.style.padding = '0px';
        progressBar.style.width = '0%';
     holdButton.style.backgroundColor = '#007bff';
     holdButton.innerHTML = '<i class="fa-duotone fa-solid fa-badge-check"></i>';
    setTimeout(() => {
                        window.location.replace('user.html');
                    }, 2500);
 }
    
function retry() {redVibration();
     suced.src = 'alert.gif';
failed.classList.add('visible');
     progressBar.style.padding = '5px';
     progressBar.innerHTML = '<i class="fa-duotone fa-solid fa-exclamation"></i>';
    progressBar.style.backgroundColor = 'red';
    setTimeout(() => {
        location.reload();
    }, 2500);
    
 }    

    document.getElementById('send-money-form').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById("popup").classList.add("active");
            
function triggerShake() {
      const container = document.getElementById('send-money-form');
      let shakeInterval;
      let shakeTime = 0;
      
      // Function to create the soft left-right shake effect
      function shake() {
        const randomX = Math.floor(Math.random() * 6) - 3; // Small shake between -3px and 3px for X (left-right)
        
        container.style.transform = `translateX(${randomX}px)`; // Only translate along the X-axis
        
        shakeTime += 50; // Shake duration in milliseconds
        if (shakeTime >= 300) { // Shake for 300ms (for a smoother and shorter effect)
          clearInterval(shakeInterval);
          container.style.transform = ''; // Reset the transform property after the shake
        }
      }

      // Start shaking at 50ms intervals
      shakeInterval = setInterval(shake, 50);
}
        let audioPlayed = false;
        const audioElement = new Audio('ting.mp3');
        const audioElement2 = new Audio('fail.mp3');
        audioElement.preload = 'auto';
        audioElement.load();
        audioElement2.preload = 'auto';
        audioElement2.load();
const hisid= document.getElementById('formid').value;
       const hisd=     document.getElementById('sde').value;
          const hisr=  document.getElementById('sre').value;
           const hisa= document.getElementById('sae').value;
        
        const accountNumber = document.getElementById('name').value;
        const acname = document.getElementById('acname').value;
        const accountNumber2 = `${acname} [${accountNumber}]`;
        const amount = parseFloat(document.getElementById('amount').value); // Ensure amount is a number
        const amount2 = "-" + amount;
        const secureData = JSON.parse(localStorage.getItem('secureData'));
        const name = secureData.name;
        const numberofmy = secureData.cvv;
        const matchedName = name;
        const updatedDescription = `${matchedName} [${numberofmy}]`;
        const selfid = secureData.formId;
        const sa = secureData.saEntry;
        const sd = secureData.sdEntry;
        const sr = secureData.srEntry;
        const sa2 = document.getElementById('sa2').value;
        const sd2 = document.getElementById('sd2').value;
        const sr2 = document.getElementById('sr2').value;
        const reason1 = 'রিসিভড মানি';
        const reason2 ='সেন্ড মানি';
                 const expectedblc = Number(fetchedDataValue) - Number(amount);
const lastRows = parseInt(localStorage.getItem('TotalRowsWas'), 10);
    const exblc = parseFloat(localStorage.getItem('exblc'));
    if (lastRows === totalRows && exblc <= fetchedDataValue) {
       console.log(`${lastRows} ${exblc}`); document.getElementById('result2').innerText = '৩০ মিনিট পরে চেষ্টা করুন';
        retry();
        return;
            }

let dbData = [];

if (amount >= 1 && amount <= fetchedDataValue && numberofmy !== accountNumber) {
 document.getElementById('backButton').style.display ='none';
    const dbloc1 = `${dgif}/${hisid}/${dgfie}`;
    const dbloc2 = `${dgif}/${selfid}/${dgfie}`;
    const dbloc3 = `${dgif}/1FAIpQLSdZD1S37ULPgJGtE0xRF6CXp4KjMpsaLR1yFVfpSAxC0GxBcw/${dgfie}`;

    const dblocd1 = new FormData();
    dblocd1.append(`entry.${hisa}`, amount);
    dblocd1.append(`entry.${hisd}`, updatedDescription);
    dblocd1.append(`entry.${hisr}`, reason1);

    const dblocd2 = new FormData();
    dblocd2.append(`entry.${sa}`, amount2);
    dblocd2.append(`entry.${sd}`, accountNumber2);
    dblocd2.append(`entry.${sr}`, reason2);

    const dblocd3 = new FormData();
    dblocd3.append(`entry.${sa2}`, '0');
    dblocd3.append(`entry.${sd2}`, `QrM from ${updatedDescription}`);
    dblocd3.append(`entry.${sr2}`, `${amount}BDT to ${accountNumber2}`);

    // Promise.all for the fetch requests
    Promise.all([
        fetch(dbloc1, { method: 'POST', body: dblocd1, mode: 'no-cors' }),
        fetch(dbloc2, { method: 'POST', body: dblocd2, mode: 'no-cors' }),
        fetch(dbloc3, { method: 'POST', body: dblocd3, mode: 'no-cors' })
    ])
    .then(() => {         localStorage.setItem('TotalRowsWas', totalRows);
         localStorage.setItem('exblc', expectedblc);
       console.log(`${expectedblc} ${totalRows}`);
      
    done(); document.getElementById("popup").classList.remove("active");
                if (!audioPlayed) {
                    audioElement.play().catch(error => {
                        console.error('Audio playback failed:', error);
                    });
                    audioPlayed = true;
                }
                fetchData();
                setTimeout(() => {
                     window.location.replace('user.html');
                    }, 1500);// Hide button after successful submission
      })
    .catch(error => {
           if (!audioPlayed) {
                    audioElement2.play().catch(error => {
                        console.error('Audio playback failed:', error);
                    });
                    audioPlayed = true;
                }triggerShake();
     retry();
                document.getElementById('result2').innerText = `Error: ${error}`;
             });
} else {
    let errorMessage = `🚫 নম্বর ভুল হয়েছে`;
retry();
    if (amount < 1) {
        errorMessage = ` সর্বনিম্ন 1 টাকা পাঠাতে পারবেন `;
    }

    if (amount > fetchedDataValue) {
        errorMessage = ` পর্যাপ্ত ব্যালেন্স নেই`;
    }

    if (accountNumber === numberofmy) {
        errorMessage = ` নিজের নম্বর গ্রহণ যগ্য নয়`;
    }

    if (!audioPlayed) {
        audioElement2.play().catch(error => {
            console.error('Audio playback failed:', error);
        });
        audioPlayed = true;
    }

    triggerShake();
    document.getElementById('result2').innerText = errorMessage;
    return;
}
        });
    });
