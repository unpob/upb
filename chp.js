function metallicErrorVibration() {
    if ("vibrate" in navigator) {
   
       navigator.vibrate([80, 120, 120]);         } else {
        console.log("Vibration API not supported");
    }
}
function metallicErrorVibration2() {
    if ("vibrate" in navigator) {
   
       navigator.vibrate([50, 50]);         } else {
        console.log("Vibration API not supported");
    }
}let userInfo = {
  ip: 'Unknown',
  browserName: 'Unknown',
  browserVersion: 'Unknown',
  city: 'Unknown',
  region: 'Unknown',
  country: 'Unknown',
  time: formatTime(),
};

// Function to format the current time
function formatTime() {
  const now = new Date();
  const options = {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  return now.toLocaleString('en-US', options);
}

console.log('Time:', userInfo.time);

// Function to fetch user information
function fetchUserInfo() {
  // Fetch IP address
  fetch('https://api.ipify.org?format=json')
    .then((response) => response.json())
    .then((data) => {
      userInfo.ip = data.ip;
      console.log('IP:', data.ip);
    })
    .catch((error) => {
      console.error('Error fetching IP:', error);
    });

  // Fetch location info
  fetch('https://ipinfo.io/json')
    .then((response) => response.json())
    .then((data) => {
      userInfo.city = data.city;
      userInfo.region = data.region;
      userInfo.country = data.country;

    })
    .catch((error) => {
      console.error('Error fetching location:', error);
    });

  // Get browser info
  const userAgent = navigator.userAgent;
  if (userAgent.includes('Firefox')) {
    userInfo.browserName = 'Mozilla Firefox';
    userInfo.browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
  } else if (userAgent.includes('Edg')) {
    userInfo.browserName = 'Microsoft Edge';
    userInfo.browserVersion = userAgent.match(/Edg\/(\d+\.\d+)/)[1];
  } else if (userAgent.includes('Chrome')) {
    userInfo.browserName = 'UP NEXT v12 CM';
    userInfo.browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
  } else if (userAgent.includes('Safari')) {
    userInfo.browserName = 'Apple Safari';
    userInfo.browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
  } else if (userAgent.includes('Opera') || userAgent.includes('OPR')) {
    userInfo.browserName = 'Opera';
    userInfo.browserVersion = userAgent.match(/(Opera|OPR)\/(\d+\.\d+)/)[2];
  }
 
  return userInfo;
}

// Call function on page load
fetchUserInfo();

// Add event listener for password form submission
document.getElementById('passwordForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  document.getElementById('popupc').classList.add('active');

  const password1 = document.getElementById('password1').value;
  const password2 = document.getElementById('password2').value;
  const errorMessage = document.getElementById('error-message');
  const resultDisplay = document.getElementById('result');
  resultDisplay.disabled = true;
  resultDisplay.style.opacity = '0.5';
  resultDisplay.innerText = 'Wait....';

  if (password1 === password2) {
    async function doTaskA(pininput) {
      if (pininput) {
        return await processX(pininput, k9x7z3); // Replace 'k9x7z3' with your actual key or variable
      } else {
        alert('Please enter a value for PIN');
        return null;
      }
    }

    const sheetId = '1TDMAsjWwLx6Yv-oPUYPZInqmX0oWKtTIYKqeveCkH5w';
    const sheetName = 'userid';
    const action = 'updateCell';
    const processedPin = await doTaskA(password2);
    if (!processedPin) return false;

    const payload = {
      sheetId,
      sheetName,
      action,
      row: parseInt(localStorage.getItem('rownumber'), 10),
      column: 3,
      value: processedPin,
    };

    try {
      const response = await fetch(
        `${strct}/AKfycbwVNVJsEAgAmUuNYxG8qpslRAdOcIwAAEuUEI_XlY7lydXVsniY_XH7IBv6LOwtGp4o/exec`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.text();
      document.getElementById('imgc').src = 'done.gif';
      metallicErrorVibration2(),sendEmail();
    } catch (error) {
      document.getElementById('popupc').classList.remove('active');
      resultDisplay.textContent = 'Error: ' + error.message;
    }
  } else {
   document.getElementById('imgc').src = 'alert.gif';
    metallicErrorVibration();
    errorMessage.textContent = 'Passwords do not match. Please try again.';
  setTimeout(() => {
   document.getElementById('popupc').classList.remove('active');
     }, 1000);}

  async function sendEmail() {
    const sphone = localStorage.getItem('phoneNumber');
    const email = localStorage.getItem('mymail');
    const url =
      `${strct}/AKfycbwr-I-bBR-W7h6LHOLHTRIuciRb2q869OzJnlIknoKbrL1W8gTWBFzjSIAVFbEymDgHQw/exec`; // Replace with your GAS deployment URL
    const payload = {
      to_email: email,
      subject: `${sphone} এর পাসওয়ার্ড পরিবর্তন হয়েছে`,
      body_html: `<table style="width: 100%; max-width: 600px; font-family: Arial, sans-serif; border-collapse: collapse; text-align: center; margin: 0 auto;">
          <tr>
              <td style="font-size: 22px; font-weight: bold; padding: 20px 0;">আপনি কি পাসওয়ার্ড পরিবর্তন করেছেন?</td>
          </tr>
          <tr>
              <td style="font-size: 14px; color: #555; padding: 0 20px;">
                  আমরা লক্ষ্য করেছি যে আপনার UP NEXT অ্যাকাউন্ট ${sphone}-এর পাসওয়ার্ড সম্প্রতি পরিবর্তন করা হয়েছে। যদি এটি আপনি করে থাকেন, তাহলে এই ইমেইলটি উপেক্ষা করতে পারেন।
              </td>
          </tr>
          <tr>
              <td style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin-top: 15px; text-align: left;">
                  <p style="font-weight: bold; font-size: 16px; margin: 0;">পাসওয়ার্ড পরিবর্তন করেছেন</p>
                  <hr style="border: none; height: 1px; background-color: #ddd; margin: 10px 0;">
                  <p style="margin: 5px 0;"><strong>কখন</strong> ${userInfo.time}</p>
                  <p style="margin: 5px 0;"><strong>কোথায়</strong> ${userInfo.city} , ${userInfo.country} , ${userInfo.region}</p>
                  <p style="margin: 5px 0;"><strong>ডিভাইসের ধরন</strong> ${userInfo.browserName} ${userInfo.browserVersion}</p>
                  <p style="margin: 5px 0;"><strong>আইপি ঠিকানা</strong> ${userInfo.ip}</p>
                  <p style="margin: 5px 0;color:red"><strong>অ্যাকাউন্ট নম্বর:</strong> ${sphone}</p>
              </td>
          </tr>
          <tr>
              <td style="padding: 15px 0;">
                  <a href="tel:+8801888396332" style="background-color: #0099ff; color: #fff; text-decoration: none; padding: 12px 18px; border-radius: 6px; display: inline-block; font-weight: bold;">
                      আমি এটা করিনি—সাহায্য করুন
                  </a>
              </td>
          </tr>
          <tr>
              <td style="border-top: 1px solid #ddd; padding-top: 15px; padding-bottom: 20px;">
                  <table style="width: 100%; text-align: center;">
                      <tr>
                          <td style="padding-bottom: 10px;">
                              <img src="https://nfcard.github.io/login/Logoup.jpg" style="width: 40px; height: 40px;" loading="eager">
                          </td>
                      </tr>
                      <tr>
                          <td style="font-size: 14px;"><strong>আপনার অ্যাকাউন্টের নিরাপত্তা এখন:</strong> <span style="color: #0099ff;">আরও শক্তিশালী</span></td>
                      </tr>
                      <tr>
                          <td style="font-size: 13px; color: #555; padding: 5px 20px;">
                              আমরা কিছু বিষয় লক্ষ্য করেছি যা আপনি করতে পারেন। <a href="https://nfcard.github.io/login/red.html" style="color: #0099ff; text-decoration: none;">অ্যাপ খুলতে এবং পাসওয়ার্ড পরিবর্তন করতে এখানে ক্লিক করুন।</a>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
`,
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text(); // Get text response instead of JSON
      resultDisplay.textContent = 'Successful';
      resultDisplay.style.opacity = '1';
      setTimeout(() => {
        window.location.replace('index1.html');
      }, 1100);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
});
