document.getElementById('backButton').addEventListener('click', function() {
    // Add class to move the body down
    document.body.classList.add('move-down');
    
    // Wait for the animation to complete (1 second), then go back
    setTimeout(function() {
        window.history.back();
    }, 400);  // Match this duration with the CSS transition time
});
       document.getElementById("popup").classList.add("active");
         const secureData = JSON.parse(localStorage.getItem('secureData'));
   const sheetU = secureData.sheetId;
const sheetUrl = `${dgistart}/${sheetU}/gviz/tq?tqx=out:csv`;
let fetchedDataValue; // Global variable to store fetched data
// Function to manually parse query parameters from the URL

    function fetchData() {
        const tbl = 0;
        const url= `${dgistart}/${sheetU}/${dgih}`;
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(data, 'text/html');
                const tables = htmlDoc.querySelectorAll('table');

                if (tbl >= tables.length) {
                    return;
                }
const cellElement = tables[tbl].rows[4].cells[5]; // Fetching data from the specified table, row 4, column 2
const cellText = cellElement.innerText || cellElement.textContent;
fetchedDataValue = parseFloat(cellText.trim()) || 0; // Added fallback 0 here
animateText(`${fetchedDataValue}৳`, 'balance', 'letter-wave');
              })
           .catch((error) => {
            console.error("Error fetching data:", error);
            document.getElementById("popup").classList.remove("active");
        });
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

async function fetchAndProcessCSV() {
    try {
        const serverData = await fetch(sheetUrl).then((res) => res.text());
        const rows = parseCSV(serverData);
        const rowCount = rows.length;

        displayTransaction(rows);
    } catch (error) {
    }
}

function parseCSV(data) {
    const rows = [];
    const lines = data.trim().split('\n');
   document.getElementById("popup").classList.remove("active");
    for (const line of lines) {
        const row = [];
        let current = '';
        let insideQuotes = false;

        for (let i = 0; i < line.length; i++) {
            const char = line[i];

            if (char === '"' && (i === 0 || line[i - 1] !== '\\')) {
                // Toggle the `insideQuotes` flag
                insideQuotes = !insideQuotes;
            } else if (char === ',' && !insideQuotes) {
                // Push the current field and reset
                row.push(current.replace(/""/g, '"').trim());
                current = '';
            } else {
                // Append the character to the current field
                current += char;
            }
        }

        // Push the last field
        row.push(current.replace(/""/g, '"').trim());
        rows.push(row);
    }

    return rows;
}

// Display transactions
function displayTransaction(rows) {
    const container = document.getElementById('transaction-list');
    transactions = [];
    let htmlContent = '';
    
    // Build all HTML first with proper order
    for (let i = rows.length - 1, order = 0; i >= 3; i--, order++) {
        const row = rows[i];
        const rawDate = row[0] || 'N/A';
        const description = row[1] || 'N/A';
        const reason = row[2] || 'N/A';
        const amount = parseFloat(row[3]) || 0;

        const formattedDate = parseGoogleDate(rawDate);
        
        const transactionHTML = `
        <div style="--order: ${order}" class="transaction ${amount > 0 ? 'greenborder' : (amount < 0 ? 'redborder' : 'grayborder')}">
            <div class="transaction-info">
                <strong>${reason}</strong><br>
                <span>${description}</span>
            </div>
            <div class="transaction-amount ${amount > 0 ? 'credit' : (amount < 0 ? 'debit' : 'neutral')}">
                ${amount > 0 ? '+' : (amount < 0 ? '-' : '')} ৳${Math.abs(amount)}
                <br> <span style="color:gray">${formattedDate}</span>
            </div>
        </div>`;
        
        htmlContent += transactionHTML;
    }
    
    // Set all content at once and remove popup
    container.innerHTML = htmlContent;
    document.getElementById("popup").classList.remove("active");
}
function parseGoogleDate(dateString) { 
    // Regular expression to capture date and time components
    const regex = /(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})/;
    const matches = dateString.match(regex);

    if (matches) {
        // Extract date components (day, month, year)
        const day = String(matches[1]).padStart(2, '0');   // Day (DD)
        const month = String(matches[2]).padStart(2, '0'); // Month (MM)
        const year = matches[3];                           // Year (YYYY)
        
        // Extract time components (hour, minute, second)
        let hour = parseInt(matches[4]);   // Hour (HH)
        const minute = String(matches[5]).padStart(2, '0'); // Minute (MM)
        const second = String(matches[6]).padStart(2, '0'); // Second (SS)

        // Convert to 12-hour format and determine AM/PM
        const ampm = hour >= 12 ? 'pm' : 'am';
        hour = hour % 12;
        hour = hour ? String(hour).padStart(2, '0') : '12'; // 12-hour format and zero padding

        // Format the date and time parts
        const datePart = `${day}/${month}/${year}`;   // Date part: DD/MM/YYYY
        const timePart = `${hour}:${minute}${ampm}`; // Time part: HH:MM:SS AM/PM

        // Return formatted date and time with a line break
        return `${datePart} ${timePart}`;
    }

    return 'Invalid Date';  // Fallback if parsing fails
}
fetchAndProcessCSV();

