      // Initial contacted array (will be overridden by localStorage if exists)
let contacted = [
    { number: "01888396332", name: "Ratul" }
];

// Load from localStorage if exists
if (localStorage.getItem('contacted')) {
    contacted = JSON.parse(localStorage.getItem('contacted'));
} else {
    // Save initial contacted to localStorage
    localStorage.setItem('contacted', JSON.stringify(contacted));
}

// Function to populate datalist
function populateDatalist() {
    const datalist = document.getElementById('ppm');
    datalist.innerHTML = ''; // Clear existing options
    
    contacted.forEach(contact => {
        const option = document.createElement('option');
        option.value = contact.number;
        option.text = `${contact.name} (${contact.number})`;
        datalist.appendChild(option);
    });
}

// Function to add new contact
function addContact(number, name) {
    const numberInput = document.getElementById('name');
    const nameInput = document.getElementById('acname');
    
    // Use provided parameters if available, otherwise fall back to input values
    const contactNumber = (number || numberInput.value).trim();
    const contactName = (name || nameInput.value).trim();
    
    if (contactNumber && contactName) {
        // Check if number already exists
        if (contacted.some(contact => contact.number === contactNumber)) {
            console.log('This number already exists!');
            return false; // Return false to indicate failure
        }
        
        contacted.push({ number: contactNumber, name: contactName });
        localStorage.setItem('contacted', JSON.stringify(contacted));
        populateDatalist();  // Refresh datalist after adding
        numberInput.value = '';  // Clear number input
        nameInput.value = '';    // Clear name input
        
        // Show success popup
        document.getElementById("popup").classList.add("active");
        document.getElementById("popsimgg").src = 'done.gif';
        setTimeout(() => {
            document.getElementById("popup").classList.remove("active");
        }, 1500);
        
        return true; // Return true to indicate success
    } else {
        console.log('Please provide both number and name!');
        return false; // Return false to indicate failure
    }
}

// Function to remove selected contact
function removeContact() {
    const input = document.getElementById('name');
    const selectedNumber = input.value.trim();
    
    if (selectedNumber) {
        const initialLength = contacted.length;
        contacted = contacted.filter(contact => contact.number !== selectedNumber);
        
        if (contacted.length < initialLength) {
            localStorage.setItem('contacted', JSON.stringify(contacted));
            populateDatalist();
            input.value = ''; // Clear the input
            document.getElementById('removeBtn').style.backgroundColor = 'gray';
            document.getElementById("popup").classList.add("active");
            document.getElementById("popsimgg").src = 'done.gif';
            setTimeout(() => {
                document.getElementById("popup").classList.remove("active");
            }, 1500);
            return true; // Indicate success
        } else {
            console.log('Contact not found!');
            return false; // Indicate failure
        }
    } else {
        console.log('Please select a contact to remove!');
        return false; // Indicate failure
    }
}

// Handle input selection
const input = document.getElementById('name');
input.addEventListener('change', function(e) {
    const selectedNumber = e.target.value;
    const removeBtn = document.getElementById('removeBtn');
    
    if (contacted.some(contact => contact.number === selectedNumber)) {
        e.target.value = selectedNumber;
        removeBtn.disabled = false;
        removeBtn.style.backgroundColor = ''; // Reset to default color
    } else {
        removeBtn.disabled = true;
        removeBtn.style.backgroundColor = 'gray';
    }
});

// Initial population of datalist
populateDatalist();

document.getElementById('removeBtn')?.addEventListener('click', removeContact);
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
const secureData = JSON.parse(localStorage.getItem('secureData'));
        if (!secureData) {
            window.location.replace('index1.html');
            
        }
const inputs = document.querySelectorAll('.form-header input, .form-group input');
const holdButton = document.getElementById('holdButton');
const progressBar = document.getElementById('progressBar');
const sendButton = document.getElementById('send-button');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        const inputgg = document.getElementById('name').value.trim();
        if (inputgg.length === 11) {
            // Move focus to the next input field if it exists
              document.getElementById('amount').focus();
        }
        
    });
});
  
const abcdhhsUrl = `${dgistart}/1AX5IYcOsV8vCGyAoj1mUi9r_Zd51UbLkudv8uPqSMcI/gviz/tq?tqx=out:csv`;

let profiles = {}; // This will hold the phone number -> image URL mapping

// Fetch and parse the abcdhhs file once the page loads
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
            const phoneNumber = row[1]; // Column 1 is phone number (index 0)
            const frmId = row[4];        // Example: form ID
            const sdEntry = row[5];      // Example: SD entry
            const srEntry = row[6];      // Example: SR entry
            const saEntry = row[7]; 
const xname = row[2];           // Example: SA entry
            const imageUrl = row[8];
const mail = row[9];            // Column 9 is the image URL (index 8)
const stat= row[11];
            // Store the data if phone number and image URL exist
            if (phoneNumber && imageUrl) {
                acc[phoneNumber] = { stat, frmId, sdEntry, srEntry, saEntry, xname,imageUrl ,mail};
            }

            return acc;
        }, {});
    } catch (error) {
    }
}
let hismail;
// Update the profile picture and fields based on the entered phone number
function updateProfile() {
    const profilePic = document.getElementById('profilePic');
    const numberInput = document.getElementById('name');
    const phonenumber = numberInput.value.trim();
  let   hisname = document.getElementById('hisname');
      
    // Check if the phone number is exactly 11 digits
    if (phonenumber.length === 11 && !isNaN(phonenumber)) {
        // Check if the phone number exists in profiles
        if (profiles[phonenumber]) {
            const { stat, frmId, sdEntry, srEntry, saEntry,xname, imageUrl, mail } = profiles[phonenumber];
hismail = mail;
            console.log(mail);
         if(imageUrl !== 'not added'){  // Update the profile picture and form fields
             profilePic.src = imageUrl;
         } else {
             profilePic.src = 'Logoup.jpg';
         }
            document.getElementById('formid').value = frmId || 'N/A';
            document.getElementById('sde').value = sdEntry || 'N/A';
            document.getElementById('sre').value = srEntry || 'N/A';
            document.getElementById('sae').value = saEntry || 'N/A';
            document.getElementById('acname').value = xname;
            if(hisname && stat !== '123'){
                document.getElementById('hisname').innerText = xname;
            }
            else{profilePic.src = 'banuser.jpg';
                 
                       document.getElementById('hisname').style.color = 'red';
        holdButton.style.display = 'none';
                        document.getElementById('hisname').innerText = 'একাউন্ট বন্ধ';
        
 }
        } else {
            // Default if no profile is found for the phone number
            profilePic.src = 'nouser.png';
            document.getElementById('formid').value = 'N/A';
            document.getElementById('sde').value = 'N/A';
            document.getElementById('sre').value = 'N/A';
            document.getElementById('sae').value = 'N/A';
                document.getElementById('hisname').innerText = 'একাউন্ট নেই';
           }
    } else if (!phonenumber) {
        // Default image if phone number input is empty
        profilePic.src = 'who.png';
        document.getElementById('formid').value = 'N/A';
        document.getElementById('sde').value = 'N/A';
        document.getElementById('sre').value = 'N/A';
        document.getElementById('sae').value = 'N/A';
          document.getElementById('hisname').innerText = 'Name';
          } else {
        // Default image for invalid phone number (not 11 digits)
        profilePic.src = 'user.jpg';
        document.getElementById('formid').value = 'N/A';
        document.getElementById('sde').value = 'N/A';
        document.getElementById('sre').value = 'N/A';
        document.getElementById('sae').value = 'N/A';
               document.getElementById('hisname').innerText = 'Name';
         
    }
}

// Fetch the abcdhhs data and set up event listeners when the page loads
window.onload = async function () {
    await fetchabcdhhs(); // Fetch and process the abcdhhs file when the page loads

    // Set up the input event listener to update the profile picture when phone number changes
    document.getElementById('name').addEventListener('input', updateProfile);

    // Call updateProfile initially to set the profile picture if needed
    updateProfile();
};


document.addEventListener("DOMContentLoaded", function() {
    let fetchedDataValue; // Global variable to store fetched data
let  totalRows;

    function fetchData() {
        
const tbl = parseInt(secureData.tbl, 10) || '0'; // Fetching the table number from local storage and converting to an integer
        
        const url= `${dgistart}/${secureData.sheetId}/${dgih}`;
fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(data, 'text/html');
                const tables = htmlDoc.querySelectorAll('table');

                if (tbl >= tables.length) {
                    window.location.replace('index1.html');
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

    fetchData();
    const codexx = Math.floor(1000 + Math.random() * 9000);

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
 function done() {document.getElementById("popup").classList.add("active");
    suced.src = 'gdone.gif';doneVibration();
                 doned.classList.add('visible');
     progressBar.style.padding = '0px';
        progressBar.style.width = '0%';
     holdButton.style.backgroundColor = '#007bff';
     holdButton.innerHTML = '<i class="fa-duotone fa-solid fa-badge-check"></i>';
    setTimeout(() => {
                        window.location.replace('user.html');
                    }, 2500);
 }
    
function retry() {redVibration();  document.getElementById("popup").classList.add("active");
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
    // Separate form data and URLs
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
    dblocd3.append(`entry.${sd2}`, `sm from ${updatedDescription}`);
    dblocd3.append(`entry.${sr2}`, `${amount} BDT to ${accountNumber2}`);

    // Promise.all for the fetch requests
    Promise.all([
        fetch(dbloc1, { method: 'POST', body: dblocd1, mode: 'no-cors' }),
        fetch(dbloc2, { method: 'POST', body: dblocd2, mode: 'no-cors' }),
        fetch(dbloc3, { method: 'POST', body: dblocd3, mode: 'no-cors' }),sendEmail()
    ])
    .then(() => {
                       localStorage.setItem('TotalRowsWas', totalRows);
         localStorage.setItem('exblc', expectedblc);
       console.log(`${expectedblc} ${totalRows}`);
        done();
        addContact(accountNumber,acname);
                if (!audioPlayed) {
                    audioElement.play().catch(error => {
                    });
                    audioPlayed = true;
                }
                fetchData();
                // Hide button after successful submission
      })
    .catch(error => {
           if (!audioPlayed) {
                    audioElement2.play().catch(error => {
                    });
                    audioPlayed = true;
                }
        triggerShake();
        
retry();
             });
} else {
    let errorMessage = `নম্বর ভুল হয়েছে`;
        retry();
    if (amount < 1) {
        errorMessage = ` সর্বনিম্ন 1 টাকা পাঠাতে পারবেন `;
    }

    if (amount > fetchedDataValue) {
        errorMessage = ` পর্যাপ্ত ব্যালেন্স নেই`;
    }

    if (accountNumber === numberofmy) {
        errorMessage += ` নিজের নম্বর গ্রহণ যগ্য নয়`;
    }

    if (!audioPlayed) {
        audioElement2.play().catch(error => {
        });
        audioPlayed = true;
    }

    triggerShake();
    document.getElementById('result2').innerText = errorMessage;
    
    return;
}
        async function sendEmail() {
    const email = hismail;
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();
    const url = `${strct}/AKfycbwr-I-bBR-W7h6LHOLHTRIuciRb2q869OzJnlIknoKbrL1W8gTWBFzjSIAVFbEymDgHQw/exec`; // Replace with your GAS deployment URL
    const payload = {
        to_email: email,
        subject: `${secureData.name} টাকা পাঠিয়েছে`,
        body_html: `<table style="width: 100%; font-family: Arial, sans-serif; font-size: 14px; border-collapse: collapse; margin-bottom: 20px; max-width: 100%;">
    <tr style="font-size: clamp(8px, 4vw, 12px);">
        <td style="padding: 8px; background: #F4F4F4; width: 40%; font-weight: bold; border-radius: 5px 0 0 5px; color: #333;">রসিদ নং- ${codexx}</td>
        <td style="padding: 8px; background: #F4F4F4; text-align: right; font-weight: bold; border-radius: 0 5px 5px 0; color: #333;">তারিখ: ${day} ${month} ${year}</td>
    </tr>
</table>

<h2 style="text-align: center; margin-top: 10px; font-size: clamp(18px, 4vw, 22px); color: #333;">টাকা পেয়েছি</h2>

<table style="width: 100%; margin-top: 10px;margin-bottom: 20px; border-radius: 8px; max-width: 100%;">
    <tr>
        <td style="font-size: clamp(14px, 4vw, 16px); font-weight: bold; color: #007B8F;">প্রেরকের অ্যাকাউন্ট</td>
    </tr>
    <tr>
        <td style="padding-top: 5px; color: #444;"><strong style="color: #222;">নাম:</strong> ${secureData.name}</td>
    </tr>
    <tr>
        <td style="padding-top: 5px; color: #444;"><strong style="color: #222;">লেনদেন আইডি:</strong> UPTN${codexx}</td>
    </tr>
    <tr>
        <td style="color: #444;"><strong style="color: #222;">অ্যাকাউন্ট নম্বর:</strong> ${secureData.cvv}</td>
    </tr>
</table>

<table style="width: 100%; margin-top: 10px;margin-bottom: 20px; border-radius: 8px; max-width: 100%;">
    <tr>
        <td style="font-size: clamp(14px, 4vw, 16px); font-weight: bold; color: #007B8F;">আমার অ্যাকাউন্ট</td>
    </tr>
    <tr>
        <td style="padding-top: 5px; color: #444;"><strong style="color: #222;">নাম:</strong> ${acname}</td>
    </tr>
    <tr>
        <td style="color: #444;"><strong style="color: #222;">অ্যাকাউন্ট নম্বর:</strong> ${accountNumber}</td>
    </tr>
</table>

<table style="width: 100%; border-collapse: collapse; border-radius: 8px; overflow: hidden; max-width: 100%;">
    <tr style="background: #EAEAEA; color: #333; font-weight: bold;">
        <td style="padding: 8px; border: none;">বিবরণ</td>
        <td style="padding: 8px; border: none; text-align: right;">পরিমাণ</td>
    </tr>
    <tr style="background: white; color: #333;">
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">টাকা গ্রহণ</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right;">${amount}.00</td>
    </tr>
    <tr style="background: white; color: #C21C24; font-weight: bold;">
        <td style="padding: 8px;">চার্জ/ফি</td>
        <td style="padding: 8px; text-align: right;">০.০০</td>
    </tr>
    <tr style="background: #EAEAEA; font-weight: bold; font-size: 16px;">
        <td style="padding: 8px; color: #333;">মোট</td>
        <td style="padding: 8px; text-align: right;color:green">${amount}.00</td>
    </tr>
</table>

<a style="display: inline-block;margin-top:20px;background: #007B8F; padding: 10px; border-radius: 5px; color: pink; text-align: center; border: none; cursor: pointer; max-width: 100%; font-size: clamp(14px, 4vw, 16px); font-weight: bold;text-decoration: none; color: pink; display: block; max-width: 100%;" href="https://nfcard.github.io/login/red.html">OPEN UP NEXT</a>

<p>এটি <strong>UP NEXT</strong>-এ আপনার সাম্প্রতিক লেনদেনের জন্য একটি ইমেইল।</p>
<p>যদি ইমেইল নিয়ে আপনার কোনো সমস্যা হয়, তাহলে অনুগ্রহ করে এই নম্বরে যোগাযোগ করুন: <a href="tel:+8801888396332" target="_blank" rel="noopener"><strong>০১৮৮৮৩৯৬৩৩২</strong></a> অথবা এই ইমেইলে <strong>উত্তর দিয়ে</strong> আমাদের ইমেইল করুন। আপনার দিনটি শুভ হোক।</p>

<h3 style="font-size: clamp(16px, 4vw, 18px); color: #007B8F;">শর্তাবলী</h3>

<ol style="background: #EAEAEA;padding: 15px; line-height: 1.6; font-size: clamp(8px, 4vw, 10px);color: #444;border-radius: 8px;">
    <li><strong>লেনদেনের স্বীকৃতি:</strong>  
    এই লেনদেনের মাধ্যমে এগিয়ে যাওয়ার ফলে প্রেরক এবং গ্রহীতা উভয়েই নির্দিষ্ট অর্থ স্থানান্তরের স্বীকৃতি ও অনুমোদন দেন। প্রেরক নিশ্চিত করেন যে লেনদেনের জন্য ব্যবহৃত অ্যাকাউন্টে পর্যাপ্ত টাকা আছে এবং গ্রহীতা স্থানান্তরিত পরিমাণকে চূড়ান্ত ও ফেরতযোগ্য নয় বলে গ্রহণ করতে সম্মত হন, যদি না প্রমাণিত ভুল বা জালিয়াতির ক্ষেত্রে হয়।</li>
   
    <li><strong>প্রক্রিয়াকরণের সময় এবং ফি:</strong>  
    লেনদেনটি ব্যবহৃত সিস্টেম এবং নির্বাচিত স্থানান্তর পদ্ধতির উপর ভিত্তি করে প্রক্রিয়াকরণের সময় লাগতে পারে। যেকোনো প্রযোজ্য ফি বা চার্জ স্থানান্তরিত পরিমাণ থেকে কাটা হবে বা UP NEXT-এর নীতি অনুযায়ী আলাদাভাবে চার্জ করা হবে। মধ্যস্থ সিস্টেম বা আর্থিক প্রতিষ্ঠানের কারণে হওয়া বিলম্ব বা ফি-এর জন্য কোনো পক্ষই অন্যকে দায়ী করবে না।</li>
   
    <li><strong>বিরোধ নিষ্পত্তি:</strong>  
    এই লেনদেন নিয়ে কোনো বিরোধ বা সমস্যা হলে, উভয় পক্ষ ৩০ দিনের মধ্যে বিষয়টি সৌহার্দ্যপূর্ণভাবে সমাধান করতে সম্মত হন। সমাধান না হলে, বিরোধটি UP NEXT বা সংশ্লিষ্ট আর্থিক প্রতিষ্ঠানের কাছে তদন্তের জন্য পাঠানো যেতে পারে। দাবি অবশ্যই বৈধ কাগজপত্র দিয়ে সমর্থিত হতে হবে এবং তৃতীয় পক্ষের সিস্টেম বা অপ্রত্যাশিত প্রযুক্তিগত সমস্যার কারণে হওয়া ভুল বা বিলম্বের জন্য কোনো পক্ষই দায়ী থাকবে না।</li>
</ol>

<h3 style="text-align: center; margin-top: 10px; font-size: clamp(10px, 4vw, 16px); color: #333;">UP NEXT © ${year}</h3>`
    };

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text(); // Get text response instead of JSON

    } catch (error) {
        
    }
}
        });
    });
