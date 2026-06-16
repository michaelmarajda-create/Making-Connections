console.log("page loaded...");
// 1. Function to change the user's name
function changeName(event) {
    // Prevent the default link behavior from refreshing the page
    if (event) {
        event.preventDefault();
    }
    
    // Select the name element by its ID
    var nameElement = document.querySelector("#profile-name");
    
    // Change the text to your profile name
    nameElement.innerText = "Michael Marajda";
}

// 2 & 3. Function to handle connection requests and update counters
function handleRequest(isAccepted, iconElement) {
    // Select the badge counters
    var requestBadge = document.querySelector("#request-count");
    var connectionBadge = document.querySelector("#connection-count");
    
    // Convert current counter text strings into integers
    var currentRequests = parseInt(requestBadge.innerText);
    var currentConnections = parseInt(connectionBadge.innerText);
    
    // BOTH buttons decrease the "Connection Requests" count
    currentRequests--;
    requestBadge.innerText = currentRequests;
    
    // ONLY the accept icon increases the "Your Connections" count
    if (isAccepted) {
        currentConnections++;
        connectionBadge.innerText = currentConnections;
    }
    
    // Find and remove the parent <li> row containing the user information
    // iconElement refers to the clicked <img> -> parentElement is the <span> -> parentElement is the <li>
    var userRow = iconElement.parentElement.parentElement;
    userRow.remove();
}