document.addEventListener('contextmenu', function (e) {
  e.preventDefault(); // Prevents the context menu from appearing
});document.addEventListener('cut', function (e) {
  e.preventDefault();
});

document.addEventListener('copy', function (e) {
  e.preventDefault();
});

document.addEventListener('paste', function (e) {
  e.preventDefault();
});
window.onload = () => {
    document.getElementById("phone_number").focus();
};
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
}
const message = document.getElementById("message");
const message2 = document.getElementById("message2");
const newacx = document.getElementById("newac");
let matchedEmail = null;
let matchedRowNumber = null;

document.getElementById("send-code").addEventListener("click", async function () {
    const phoneInput = document.getElementById("phone_number").value.trim();

    if (
        phoneInput.length === 11 &&
        (phoneInput.startsWith("019") || phoneInput.startsWith("015") || phoneInput.startsWith("016") ||
            phoneInput.startsWith("017") || phoneInput.startsWith("013") || phoneInput.startsWith("018")) &&
        /^[0-9]+$/.test(phoneInput)
    ) {
        // Valid phone number
    } else {
        message2.textContent = "ফোন নাম্বারটি সঠিক নয়";
      metallicErrorVibration();
        console.log("Validation failed: Check length, start digit, and numeric format.");
        return;
    }

    document.getElementById("popup").classList.add("active");

    const sendCodeButton = document.getElementById("send-code");
    sendCodeButton.disabled = true;
    sendCodeButton.innerText = "Sending....";
    sendCodeButton.style.opacity = "0.4";
    message2.style.display = "none";

    async function getEmailByPhoneNumber(phoneNumber) {
        const csvUrl = `${dgistart}/1TDMAsjWwLx6Yv-oPUYPZInqmX0oWKtTIYKqeveCkH5w/gviz/tq?tqx=out:csv`;

        try {
            const response = await fetch(csvUrl);
            const csvData = await response.text();
            const rows = csvData.split("\n").map(row =>
                row.split(",").map(cell => cell.replace(/^"|"$/g, "").trim())
            );

for (let i = 0; i < rows.length; i++) {
    const storedPhoneNumber = rows[i][1]?.replace(/\D/g, ""); // Normalize stored phone number
    const storedEmail = rows[i][3];

    if (storedPhoneNumber === phoneNumber) {
        return { email: storedEmail, rowNumber: i + 1 }; // Return matched row number (1-based index)
    }
}
        } catch (error) {
            console.error("Error fetching CSV:", error);
        }
        return null;
    }

    const phoneNumber = phoneInput.replace(/\D/g, "");

 getEmailByPhoneNumber(phoneNumber).then(result => {
    if (!result) {
        message2.style.display = "block";
        message2.textContent = "ফোন নাম্বারটি নিবন্ধিত নয়।";
        sendCodeButton.style.display = "none";metallicErrorVibration();
        newacx.style.display = "";
        document.getElementById("popup").classList.remove("active");
        return;
    }

    const { email, rowNumber } = result; // Extract email and row number
matchedEmail = result.email; // Store globally
    matchedRowNumber = result.rowNumber; //
        const code = Math.floor(1000 + Math.random() * 9000);
        localStorage.setItem("verification_code", code);

        async function sendEmail() {
            const today = new Date();
            const url = `${strct}/AKfycbwr-I-bBR-W7h6LHOLHTRIuciRb2q869OzJnlIknoKbrL1W8gTWBFzjSIAVFbEymDgHQw/exec`; // Replace with your GAS URL
            const payload = {
                to_email: email,
                subject: `OTP/ওটিপি: ${code}`,
                body_html: `<table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; overflow: hidden; ">
        <!-- Header -->
        <tr>
            <td style="padding: 20px; text-align: center; background-color: #007BFF; color: #ffffff;">
                <h1 style="margin: 0; font-size: 24px;">UP NEXT</h1>
                <p style="margin: 5px 0 0; font-size: 16px;">অ্যাকাউন্ট যাচাইকরণ</p>
            </td>
        </tr>

        <!-- Code Section -->
        <tr>
            <td style="padding: 20px; text-align: center;">
                <p style="font-size: 18px; color: #333; margin: 0 0 10px;">এখানে আপনার যাচাইকরণ কোড:</p>
                <div style="background-color: #f1f1f1; padding: 15px; border-radius: 8px; display: inline-block; font-size: 24px; font-weight: bold; color: #007BFF; letter-spacing: 5px;">
                    ${code}
                </div>
                <p style="font-size: 14px; color: #777; margin: 10px 0 0;">এই কোডটি ১০ মিনিটের জন্য বৈধ।</p>
            </td>
        </tr>

        <!-- Terms & Conditions -->
        <tr>
            <td style="padding: 20px;">
                <h2 style="font-size: 18px; color: #333; margin: 0 0 10px;">শর্তাবলী</h2>
                <p style="font-size: 14px; color: #555; margin: 0 0 10px;">
                    <strong>১. কোড ব্যবহার:</strong> এই যাচাইকরণ কোড শুধুমাত্র আপনার জন্য। এটি কারো সাথে শেয়ার করবেন না। UP NEXT কখনো আপনার কাছে কোড জানতে চাইবে না।
                </p>
                <p style="font-size: 14px; color: #555; margin: 0;">
                    <strong>২. অ্যাকাউন্ট নিরাপত্তা:</strong> যদি আপনি এই কোডের জন্য অনুরোধ না করে থাকেন, তাহলে তাৎক্ষণিকভাবে UP NEXT-এর সাথে যোগাযোগ করুন। এই নম্বরে কল করুন: ০১৮৮৮৩৯৬৩৩২
                </p>
            </td>
        </tr>

        <!-- Security Tips -->
        <tr>
            <td style="padding: 20px;">
                <h2 style="font-size: 18px; color: #333; margin: 0 0 10px;">নিরাপত্তা পরামর্শ</h2>
                <ul style="font-size: 14px; color: #555; margin: 0; padding-left: 20px;">
                    <li>কখনো আপনার কোড কারো সাথে শেয়ার করবেন না।</li>
                    <li>আপনার ইমেইল অ্যাকাউন্ট শক্তিশালী পাসওয়ার্ড এবং টু-ফ্যাক্টর অথেনটিকেশন (2FA) দিয়ে সুরক্ষিত রাখুন।</li>
                    <li>ফিশিং ইমেইল থেকে সাবধান থাকুন। লিঙ্কে ক্লিক করার আগে প্রেরকের পরিচয় যাচাই করুন।</li>
                </ul>
            </td>
        </tr>

        <!-- Footer -->
        <tr>
            <td style="padding: 20px; text-align: center; background-color: #f1f1f1; font-size: 12px; color: #777;">
                <p style="margin: 0;"> UP NEXT © ২০২৫</p>
            </td>
        </tr>
    </table>`
            };

            try {
                const response = await fetch(url, {
                    method: "POST",
                    mode: 'no-cors',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });

                await response.text(); // Ensure response is read

                sendCodeButton.style.display = "none";
                document.getElementById("email-form").style.display = "none";
                document.getElementById("code-form").style.display = "block";
                message.style.display = "block";
                message.style.textAlign = "justify";metallicErrorVibration2();
                message.innerHTML = `একটি কোড আপনার ইমেইলে <span id="mail">${email}</span> পাঠানো হয়েছে।`;
                document.getElementById("popup").classList.remove("active");

                document.querySelector(".code-input").focus();
            } catch (error) {
                message2.style.display = "block";metallicErrorVibration();
                message2.textContent = "কোড পাঠানো হয়নি। কিছুক্ষণ পর আবার চেষ্টা করুন।";
                document.getElementById("popup").classList.remove("active");
            }
        }

        sendEmail();
    });
});

// Auto-advance functionality for input fields
const inputs = document.querySelectorAll(".code-input");

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
          metallicErrorVibration2();
        }

        if ([...inputs].every(i => i.value !== "")) {
            verifyCode();
          metallicErrorVibration2();
        }
    });

    input.addEventListener("keydown", e => {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

// New account function
function newac() {
    newacx.style.display = "none";
    document.getElementById("popup").classList.remove("active");

    const phoneNumber = document.getElementById("phone_number").value.trim();
metallicErrorVibration();
  const userConfirmed = confirm("অনুগ্রহ করে একাউন্ট খোলার সময় এ্যাপ থেকে বের হবেন না! এতে আপনার একাউন্টে সমস্যা হবে।");
    if (userConfirmed) {
        setTimeout(() => {
      window.parent.postMessage({ 
    phoneNumber: phoneNumber, 
    email: '', 
    rowNumber: '', 
    status: "new_ac"
}, "*");  }, 500);
    }
}

// Verification function
function verifyCode() {
    let enteredCode = [...inputs].map(input => input.value).join("");
    const savedCode = localStorage.getItem("verification_code");
    const phoneNumber = document.getElementById("phone_number").value.trim();

    if (enteredCode === savedCode) {
        document.body.classList.add("move-down");
        localStorage.removeItem("verification_code");

        message.style.display = "block";
        message.textContent = "অভিনন্দন। ভেরিফিকেশন সম্পন্ন হয়েছে।";
        document.getElementById("popup").classList.remove("active");

        setTimeout(() => {
 window.parent.postMessage({ 
    phoneNumber: phoneNumber, 
    email: matchedEmail, 
    rowNumber: matchedRowNumber, 
    status: "verification_success" 
}, "*");
}, 500);
    } else {
        message.style.display = "none";
        message2.style.display = "block";
        message2.textContent = "আপনার কোডটি সঠিক নয়। পুনরায় আবার চেষ্টা করুন।";
        document.getElementById("popup").classList.remove("active");
    }
}

document.getElementById("verify-code").addEventListener("click", verifyCode);


