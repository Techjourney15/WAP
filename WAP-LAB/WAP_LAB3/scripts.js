 // STEP 1: jQuery Selectors - Cache DOM Elements
// Using $ prefix convention to indicate jQuery objects
// Caching elements improves performance (DOM queries run once)

const $countryList = $('#countryList')           // Select country dropdown list
const $btn_select_country = $('#select_country') // Select country button
const $display_country = $('#display_country')   // Input field to display selected country

const $user_name = $('#name')           // Name input field
const $user_email = $('#email')         // Email input field
const $user_password = $('#password')   // Password input field
const $form = $('#login_form')          // Form element
const $upload = $('#upload')            // File upload input
let country_name  // Variable to store selected country name

// STEP 2: Fetch Country Data Using AJAX
// jQuery AJAX automatically converts JSON response to JavaScript object
// dataType: 'json' tells jQuery to expect JSON data

$.ajax({
  // API endpoint - fetches all countries with their names and flag images
  url: 'https://restcountries.com/v3.1/all?fields=name,flags',
  type: 'GET',              // HTTP GET request - retrieve data (not send)
  dataType: 'json',         // Expect JSON response (jQuery auto-converts)
 
 // SUCCESS - executes when data is successfully received
  success: function(data) {
    // data = array of 250+ countries with name and flag properties
    // $.each() = jQuery loop (similar to forEach)
   
 // Iterate through each country object in the array
    $.each(data, function(index, country) {
      // index = position in array (0, 1, 2, etc.)
      // country = current country object {name: {...}, flags: {...}}
      
      // Create a new <li> element dynamically
     
       const $li = $('<li>')
     // Set HTML content with country flag image and name
      // country.flags.png = URL of flag image
      // country.name.common = Country name (e.g., "Afghanistan")
      $li.html(`<img src="${country.flags.png}"> 
                 ${country.name.common}`)
     
      // Add click event handler - runs when user clicks a country
      $li.on('click', function() {
        country_name = country.name.common           // Store selected country name
        $display_country.val(country_name)           // Put name in input field
        $countryList.hide()                          // Hide dropdown after selection
      })
     
      // Add the new <li> to the dropdown list (append = add to end)
      $countryList.append($li)
    })
  },
  // ERROR - executes if AJAX request fails (network error, invalid URL, etc.)
  error: function(err) {
    console.error(err)  // Log error to browser console for debugging
  }
})
// STEP 3: Toggle Country Dropdown Menu

// Show/Hide country list when user clicks the select button
$btn_select_country.on('click', function() {
  // .on() = jQuery event handler (replaces addEventListener)
  // 'click' = trigger when button is clicked
  
  // Check current display status of the dropdown
  if($countryList.css('display') === 'none') {
    // If hidden, show it with flexbox layout
    $countryList.css('display', 'flex')
  } else {
    // If visible, hide it
    $countryList.hide()  // jQuery shorthand for .css('display', 'none')
  }
})
// STEP 4: Form Validation and Submission

// Validate all form fields before allowing submission
// Check: Name, Email, Password, Country, File, File Size
$form.on('submit', function(e) {
  // .on('submit') = triggers when form submit button is clicked
  // e = event object
  e.preventDefault()  // Stop page reload (default form behavior)

// VALIDATION 1: NAME FIELD 
  if(!$user_name.val()) {
    // .val() = get input field value
    // If name is empty, show alert and exit
    alert("Name field is required")
    return  // Stop form submission
  }
 
 // VALIDATION 2: EMAIL FIELD 
  if(!$user_email.val()) {
    // If email is empty, show alert and exit
    alert("Email field is required")
return
  }
 
  // VALIDATION 3: PASSWORD FIELD 
  if(!$user_password.val()) {
    // If password is empty, show alert and exit
    alert("Password field is required")
    return
  }
  
// VALIDATION 4: COUNTRY FIELD 
  if(!$display_country.val()) {
    // If country not selected, show alert and exit
    alert("Country field is required")
    return
  }
  
//VALIDATION 5: FILE UPLOAD (Check if file selected) \
  if($upload[0].files.length === 0) {
    // $upload[0] = get native DOM element from jQuery object
    // .files = access file list from input[type="file"]
    // .length = number of files selected
    
    alert("Please upload a document")
    return
  }
  
  //VALIDATION 6: FILE SIZE CHECK 
  const file = $upload[0].files[0]      // Get first uploaded file
  if(file.size > 2 * 1024 * 1024) {     // 2MB = 2 * 1024 * 1024 bytes
    // If file size exceeds 2MB, show alert
    alert("File size must be less than or equal to 2MB")
    $upload.val('')  // Clear the file input
    return
  }
  
 //ALL VALIDATIONS PASSED 
  // If code reaches here, all validations are successful
  alert("Form submitted successfully")
  // Here you would normally send data to server using AJAX
})
