

/* -------------------- DOM SELECTION -------------------- */

// Selecting elements using ID
const Name = document.getElementById("name");        // id selection
const roll = document.getElementById("roll");
const address = document.getElementById("address");

// Selecting elements using class
const btn_output = document.querySelector(".btn_output");
const btn_submit = document.getElementById("btn_submit");
const entryform = document.getElementById("entryform");

// Output sections
const transcript = document.querySelector("aside");
const show_data = document.querySelector(".show_data");

/* -------------------- localStorage COUNTER -------------------- */

let i = parseInt(localStorage.getItem("counter")) || 0;

/*
Explanation:
- If "counter" exists in localStorage → i = stored value
- If it does not exist → i = 0
*/

/* -------------------- FUNCTION IMPLEMENTATIONS -------------------- */

// Function to dynamically render UI in transcript section
function UpdateTranscript(obj) {
    transcript.innerHTML = `
        <h2>Transcript</h2>
        ${description_list(obj)}
    `;
}

// Function to dynamically render UI in output section
function ShowOutput(obj, j) {
    show_data.innerHTML += `
        <div class="border">
            <h2>User ${j}</h2>
            ${description_list(obj)}
        </div>
    `;
}

/* -------------------- COMMON / REDUNDANT FUNCTION -------------------- */

function description_list(obj) {
    return `
        <dl class="details">
            <dt>Name:</dt>
            <dd>${obj.data_name}</dd>

            <dt>Roll:</dt>
            <dd>${obj.data_roll}</dd>

            <dt>Address:</dt>
            <dd>${obj.data_address}</dd>
        </dl>
    `;
}


/* -------------------- EVENT LISTENERS -------------------- */

// Handle form submission
entryform.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload
   
    // Validate roll number is not negative
    if (Number(roll.value) < 0) {
        alert("Roll number cannot be negative!");
        return;
    }
    
    // Create user object with current form values
    const user_object = {
        data_name: Name.value,
        data_roll: Number(roll.value),
            
        data_address: address.value,
    };
    
    // Update transcript with current entry
    UpdateTranscript(user_object);
    
    // Store data in localStorage
    localStorage.setItem(`user${i}`, JSON.stringify(user_object));
    
    // Increment counter
    i++;
    localStorage.setItem("counter", i);
    
    // Clear form
    entryform.reset();
});

// Handle show output button
btn_output.addEventListener("click", function() {
    // Clear previous output
    show_data.innerHTML = "";
    
    // Get current counter value
    const total = parseInt(localStorage.getItem("counter")) || 0;
    
    // Check if there's any data
    if (total === 0) {
        show_data.innerHTML = "<p>No data stored yet. Please submit some entries first.</p>";
        return;
    }
    
    // Display all stored users
    for (let j = 0; j < total; j++) {
        const userKey = `user${j}`;
        const userData = localStorage.getItem(userKey);
        
        if (userData) {
            try {
                const user_retrieve = JSON.parse(userData);
                ShowOutput(user_retrieve, j + 1);
            } catch (error) {
                console.error(`Error parsing user data for ${userKey}:`, error);
            }
        }
    }
});