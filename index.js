document.addEventListener('DOMContentLoaded', async function () {
    const storedPhoneNumber = localStorage.getItem('phoneNumber');
    if (storedPhoneNumber) {
        animateText(storedPhoneNumber, 'phoneNumber');
        const inputgg = document.getElementById('phoneNumber').value.trim();
        if (inputgg.length === 11) {
            document.getElementById('pin').focus();
        }
    } else {
        window.location.replace("verify.html");
    }
function metallicErrorVibration() {
    if ("vibrate" in navigator) {
   
      navigator.vibrate([
        100, 550, 100, 170,  // First shake (left, right)
        80, 90, 70, 90,  // Second shake
        70, 80   // Fifth shake
    ]);        } else {
        console.log("Vibration API not supported");
    }
}


    let audioPlayed = false;
    const audioElement = new Audio('nyr.mp3');

    // Preload the audio
    audioElement.preload = 'auto';
    audioElement.load();

    function playAudio() {
        if (!audioPlayed) {
            audioElement.play().catch(error => console.error('Audio playback failed:', error));
            audioPlayed = true;
        }
    }

    localStorage.removeItem('secureData');

    function animateText(text, elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.value = '';
            text.split('').forEach((char, index) => {
                setTimeout(() => element.value += char, index * 40);
            });
        }
    }

    // Fetch and process CSV data
    const csvUrl = `${dgistart}/1AX5IYcOsV8vCGyAoj1mUi9r_Zd51UbLkudv8uPqSMcI/gviz/tq?tqx=out:csv`;
    const csvUrl2 = `${dgistart}/1TDMAsjWwLx6Yv-oPUYPZInqmX0oWKtTIYKqeveCkH5w/gviz/tq?tqx=out:csv`;

    async function fetchCSV(url) {
        try {
            document.getElementById("popup").classList.add("active");
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch data");
            const csvText = await response.text();

            const rows = csvText.split('\n').filter(row => row.trim() !== '');
            return rows.map(row =>
                row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
                    .map(cell => cell.replace(/^"|"$/g, '').trim())
            );
        } catch (error) {
            console.error("Error fetching CSV:", error);
            window.location.href = 'index.html';
            return null;
        }
    }

    function normalizeNumber(number) {
        return number.replace(/[-\s+]/g, '').trim();
    }

    async function doTaskA(pininput) {
        if (pininput) {
            return await processX(pininput, k9x7z3);
        } else {
            alert('Please enter a value for PIN');
            return null;
        }
    }

    let userInfo = {
        ip: 'Unknown',
        browserName: 'Unknown',
        browserVersion: 'Unknown',
        city: 'Unknown',
        region: 'Unknown',
        country: 'Unknown',
        time: formatTime(),
    };

    function formatTime() {
        const now = new Date();
        const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
        return now.toLocaleString('en-US', options);
    }
    function fetchUserInfo() {
        // Fetch IP address
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                userInfo.ip = data.ip;
            })
            .catch(error => {
                console.error('Error fetching IP:', error);
            });

        // Fetch location info
        fetch('https://ipinfo.io/json')
            .then(response => response.json())
            .then(data => {
                userInfo.city = data.city;
                userInfo.region = data.region;
                userInfo.country = data.country;

            })
            .catch(error => {
                console.error('Error fetching location:', error);
            });
    }

    // Call function on page load
    fetchUserInfo();

    async function sendEmail(smail,sphone) {
        const email = smail;
        const url = `${strct}/AKfycbwr-I-bBR-W7h6LHOLHTRIuciRb2q869OzJnlIknoKbrL1W8gTWBFzjSIAVFbEymDgHQw/exec`; // Replace with your GAS deployment URL
        const payload = {
            to_email: email,
            subject: `অপরিচিত ফোনে ${sphone} যুক্ত হয়েছে`,
            body_html: `<table style="width: 100%; max-width: 600px; font-family: Arial, sans-serif; border-collapse: collapse; text-align: center; margin: 0 auto;">
    <tr>
        <td style="font-size: 22px; font-weight: bold; padding: 20px 0;">আপনি কি নতুন ডিভাইসে সাইন ইন করেছেন?</td>
    </tr>
    <tr>
        <td style="font-size: 14px; color: #555; padding: 0 20px;">
            আমরা লক্ষ্য করেছি যে আপনার UP NEXT অ্যাকাউন্ট ${sphone} সম্প্রতি একটি নতুন ডিভাইসে লগইন করা হয়েছে। যদি এটি আপনি করে থাকেন, তাহলে এই ইমেইলটি উপেক্ষা করতে পারেন।
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin-top: 15px; text-align: left;">
            <p style="font-weight: bold; font-size: 16px; margin: 0;">নতুন লগইন করেছেন</p>
            <hr style="border: none; height: 1px; background-color: #ddd; margin: 10px 0;">
            <p style="margin: 5px 0;"><strong>কখন</strong> ${userInfo.time}</p>
            <p style="margin: 5px 0;"><strong>কোথায়</strong> ${userInfo.city} , ${userInfo.country} , ${userInfo.region}</p>
            <p style="margin: 5px 0;"><strong>আইপি</strong> ${userInfo.ip}</p>
            <p style="margin: 5px 0;"><strong>অ্যাকাউন্ট নম্বর:</strong> ${sphone}</p>
        </td>
    </tr>
    <tr>
        <td style="padding: 15px 0;">
            <a href="tel:+8801888396332" style="background-color:#eb3d26 ; color: #fff; text-decoration: none; padding: 12px 18px; border-radius: 6px; display: inline-block; font-weight: bold;">
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
                    <td style="font-size: 14px;"><strong>আপনার অ্যাকাউন্টের নিরাপত্তা:</strong> <span style="color: #0099ff;">আরও শক্তিশালী</span></td>
                </tr>
                <tr>
                    <td style="font-size: 13px; color: #555; padding: 5px 20px;">
                        আমরা কিছু বিষয় লক্ষ্য করেছি যা আপনি করতে পারেন। <a href="https://nfcard.github.io/login/red.html" style="color: #0099ff; text-decoration: none;">অ্যাপ খুলতে এবং পাসওয়ার্ড পরিবর্তন করতে এখানে ক্লিক করুন।</a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>`
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
            console.error('Error sending email:', error);
        }
    }

async function eid(rowIndex2) {
    const sheetId = '1TDMAsjWwLx6Yv-oPUYPZInqmX0oWKtTIYKqeveCkH5w';
    const sheetName = 'userid';
    const action = 'updateCell';

    const payload = {
        sheetId,
        sheetName,
        action,
        row: rowIndex2,
        column: 5,
        value: '123'
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
    } catch (error) {
    }
}
    async function matchData() {
        const [csvData, csvData2] = await Promise.all([fetchCSV(csvUrl), fetchCSV(csvUrl2)]);

        if (!csvData || !csvData2) return false;

        const storedPhoneNumber = document.getElementById('phoneNumber').value;
        const pinInput = document.getElementById('pin').value;

        const normalizedInput = normalizeNumber(storedPhoneNumber);

        const matchedRow = csvData.find(row =>
            row[1].split(/[,\s]+/).some(num => normalizeNumber(num) === normalizedInput)
        );

        const matchedRow2 = csvData2.find(row =>
            row[1].split(/[,\s]+/).some(num => normalizeNumber(num) === normalizedInput)
        );

        if (matchedRow && matchedRow2) {
            const processedPin = await doTaskA(pinInput);
            if (!processedPin) return false;

            const rowIndex1 = csvData.findIndex(row => row === matchedRow) + 1;
            const rowIndex2 = csvData2.findIndex(row => row === matchedRow2) + 1;
            const pinn = matchedRow2[2];

            if (
                pinn === processedPin &&
                rowIndex1 === rowIndex2 &&
                matchedRow[1] === storedPhoneNumber
            ) {
                const secureData = {
                    cvv: matchedRow[1],
                    name: matchedRow[2],
                    sheetId: matchedRow[3],
                    formId: matchedRow[4],
                    sdEntry: matchedRow[5],
                    srEntry: matchedRow[6],
                    saEntry: matchedRow[7],
                    img: matchedRow[8],
                    id: matchedRow[11],
                    mymail: matchedRow[9],
                    tbl: 0,
                    card: matchedRow[12]                };
           
                if (matchedRow2[5] !== 'ban') {
                    if (localStorage.getItem("mymail") !== matchedRow[9]) {
                            document.getElementById("popup").classList.remove("active");
                            window.location.replace('verify.html');
                    } else {
                    if (matchedRow2[4] && matchedRow2[4] !== '123') {
    eid(rowIndex2);
  const upnxt =  localStorage.getItem('score');
    const newupn = Number(upnxt) + Number(matchedRow2[4]);
    localStorage.setItem('score',newupn);
}
                        const phoneNInput = document.getElementById('phoneNumber').value;
const storedPNumber = localStorage.getItem('phoneNumber');
const emailSentFlags = localStorage.getItem('emailSents'); // Check if email was sent before

if (phoneNInput !== storedPNumber) {
    const smail = matchedRow[9];
    const sphone = matchedRow[1];

    sendEmail(smail, sphone);
} else if(!emailSentFlags){
    const smail = matchedRow[9];
    const sphone = matchedRow[1];

    sendEmail(smail, sphone);
    
    localStorage.setItem('emailSents', 'true'); // Set email sent flag

}
                        localStorage.setItem('phoneNumber', storedPhoneNumber);
 
                        localStorage.setItem('secureData', JSON.stringify(secureData));
                        
                        setTimeout(() => {
                            window.location.replace('user.html');
                        }, 200);
                    }
                } else {
                    showErrorMessage('একাউন্ট বন্ধ করে দেওয়া হয়েছে (অফিসে যোগাযোগ করুন)', 'nouser.png');
              metallicErrorVibration();  }
                document.getElementById('pin').value = '';
                return true;
            } else {
                document.getElementById('pin').value = '';
                showErrorMessage('পিন সঠিক নয়', 'nomatch.gif');
                metallicErrorVibration();
                return false;
            }
        } else {document.getElementById('phoneNumber').value = '';
                
            showErrorMessage('নম্বর সঠিক নয়', 'nomatch.gif');
            metallicErrorVibration();
            return false;
        }
    }

    function showErrorMessage(message, imageSrc) {
        const popup = document.getElementById('no-connection-popup2');
        if (popup) popup.classList.add('visible');

        const result = document.getElementById('result');
        if (result) result.innerText = message;

        const image = document.getElementById('mypic');
        if (image) image.src = imageSrc;

        document.getElementById("popup").classList.remove("active");
    }

    // Form submit handler
    document.getElementById('sub').addEventListener('click', async function (event) {
        event.preventDefault();
        const isValid = await matchData();
        if (!isValid) {
            document.getElementById("popup").classList.remove("active");
        }
    });

    // Close popup listener
    document.getElementById('close-popup2')?.addEventListener('click', () => {
        document.getElementById('no-connection-popup2').classList.remove("active");
    });
});
