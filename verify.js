function getQueryParams() {
    const queryString = window.location.search; // Get the query string from the URL
    const params = {};

    if (queryString) {
        const pairs = queryString.substring(1).split("&"); // Remove "?" and split parameters
        for (const pair of pairs) {
            const [key, value] = pair.split("="); // Split key and value
            if (key) {
                params[decodeURIComponent(key)] = decodeURIComponent(value || "");
            }
        }
    }

    return params; // Return an object with all parameters
}

const params = getQueryParams();

// Add a message listener for cross-origin communication
window.addEventListener("message", function (event) {
    // Ensure the event data is valid
    if (event && event.data && typeof event.data === "object") {
        const { phoneNumber,email,rowNumber, status } = event.data;

        // Validate the phoneNumber
        if (phoneNumber && !isNaN(phoneNumber)) {
            // Handle different statuses
            if (status === "verification_success") {
                localStorage.setItem("phoneNumber", phoneNumber);
                localStorage.setItem("mymail", email);
                localStorage.setItem("rownumber", rowNumber);
                if (params.cp) {
                    window.location.href = "chp.html";
                } else {
                    window.location.href = "index1.html";
                }
            } else if (status === "new_ac") {
                   localStorage.setItem("phoneNumberx", phoneNumber);
                  window.location.href = "time.html";
               }
        } else {
            console.warn("Invalid phoneNumber received:", phoneNumber);
        }
    } else {
        console.warn("Invalid message event data:", event.data);
    }
});


