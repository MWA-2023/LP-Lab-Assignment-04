function redirectToRegister() {
  window.location.href = "registeration.html";
}

document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Validate form fields
    var name = document.getElementById("name").value;
    var middleName = document.getElementById("middle-name").value;
    var surname = document.getElementById("surname").value;
    var age = document.getElementById("age").value;
    var contactNumber = document.getElementById("contact-number").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var bloodGroup = document.getElementById("blood-group").value;
    var emergencyContactName = document.getElementById("emergency-contact-name").value;
    var emergencyContactNumber = document.getElementById("emergency-contact-number").value;
    var consentToDonate = document.getElementById("consent-to-donate").value;
    var declarationAccuracy = document.getElementById("declaration-accuracy").checked;
  
    if (!name || !middleName || !surname || !age || !contactNumber || !email || !address || !bloodGroup ||
        !emergencyContactName || !emergencyContactNumber || !consentToDonate || !declarationAccuracy) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (age < 18) {
      alert("Age must be 18 or above.");
      return;
    }
  
    if (contactNumber.length !== 10) {
      alert("Contact Number must be 10 digits.");
      return;
    }
  
    if (!email.endsWith("@gmail.com")) {
      alert("Email Address must end with @gmail.com.");
      return;
    }
  
    if (address.length < 20) {
      alert("Address must be at least 20 characters long.");
      return;
    }
  


  });
  
  