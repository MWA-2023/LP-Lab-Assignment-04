function validateForm() {
    // Get form inputs
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    /*var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;*/
  
    // Validate form inputs
    if (username.trim() == "") {
      alert("Please enter a username.");
      return false;
    }
    if (email.trim() == "") {
      alert("Please enter an email.");
      return false;
    }
    if (college_name.trim() == "") {
      alert("Please enter an College name.");
      return false;
    }
    if (contact_no.trim() == "") {
      alert("Please enter an Contact no.");
      return false;
    }
    /*if (password.trim() == "") {
      alert("Please enter a password.");
      return false;
    }
    if (confirm_password.trim() == "") {
      alert("Please confirm your password.");
      return false;
    }
    if (password !== confirm_password) {
      alert("Passwords do not match.");
      return false;
    }*/
    return true;
  }
  