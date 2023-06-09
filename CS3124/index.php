<?php
    // Database connection
    $host = "localhost:3306";
    $user = "root";
    $password = "";
    $database = "login_db";

    $conn = mysqli_connect($host, $user, $password, $database);

?>

<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Login Form </title>
  <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Montserrat:wght@800&amp;display=swap'>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'><link rel="stylesheet" href="./style.css">

</head>
<body>
<div class="form-title" style="text-align:center; font-weight:bold;margin-top:8px;">
    All Users
  </div>


<table>
  <tr>
    <th>id</th>
    <th>username</th>
    <th>email</th>
    <th>password</th>
    <th>mobile</th>
    <th>gender</th>
    <th>dept</th>
    <th>address</th>
  </tr>

  <?php

$query = "SELECT * FROM users";
$result = $conn->query($query);

// Build the HTML select element with options
while ($row = $result->fetch_assoc()) {
  echo '<tr>
  <td>'.$row['id'].'</td>
  <td>'.$row['username'].'</td>
  <td>'.$row['email'].'</td>
  <td>'.$row['password'].'</td>
  <td>'.$row['mobile'].'</td>
  <td>'.$row['gender'].'</td>
  <td>'.$row['dept'].'</td>
  <td>'.$row['address'].'</td>
</tr>';
}


  ?>
</table>
<form method="POST" class="login-form" style="margin-top: 220px;margin-bottom: 50px;">
  <div class="form-title">
    Login Form
  </div>

  <div class="form-input">
    <label for="username">Username</label>
    <input type="text" id="username" name="username" required min="6">
    <span class="error_mesg" id="username_err"></span>
  </div>
  <div class="form-input">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required inputmode="email">
    <span class="error_mesg" id="email_err"></span>

  </div>
  <div class="form-input">
    <label for="password">Password</label>
    <input type="password" id="password" name="password" required>
    <span class="error_mesg" id="pass_err"></span>
  </div>
  <div class="form-input">
    <label for="confpassword">Confirm Password</label>
    <input type="password" id="confpassword" required>
    <span class="error_mesg" id="confpass_err"></span>

  </div>
  <div class="form-input">
    <label for="dob">Date of Birth</label>
    <input type="date" id="dob" name="dob" required>
    <span class="error_mesg" id="dob_err"></span>

  </div>
  <div class="form-input">
    <label for="tel">Mobile No</label>
    <input type="tel" id="tel" value="+91" name="mobile" required inputmode="tel" onchange="mobileChange()"> 
    <span class="error_mesg" id="tel_err"></span>

  </div>
  <div class="form-input">
    <label for="gender">Gender</label>
    <p style="display: flex; flex-direction: row;align-items: center;justify-content: left;width: 100px;">
      <input type="radio" id="male" name="gender" value="Male">Male
    </p>
    <p style="display: flex; flex-direction: row;align-items: center;justify-content: left;width: 120px;">
      <input type="radio" id="female" name="gender" value="Female">Female
    </p>
    <span class="error_mesg" id="gender_err"></span>

  </div>

  <div class="form-input">
    <label for="dept">Department</label>
    <select name="dept" id="dept">
      <option value="" disabled selected>Select Department</option>
      <option value="IT">IT</option>
      <option value="COMP">COMP</option>
      <option value="ENTC">ENTC</option>
      <option value="AIDS">AIDS</option>

    </select>
    <span class="error_mesg" id="dept_err"></span>

  </div>
  <div class="form-input">
    <label for="address">Address</label>
    <textarea name="address" id="address" cols="10" rows="10" style="width: 100%;" draggable="false" minlength="10"></textarea>
    <span class="error_mesg" id="addr_err"></span>

  </div>
  
  <div class="form-input" style="margin-top: 20px;">
    <p>
      <input type="checkbox" id="terms" style="width: 50px;" required> I agreee all the terms and conditions
    </p>
    <span class="error_mesg" id="check_err"></span>
  </div>

  <div class="captcha">
    <label for="captcha-input">Enter Captcha</label>
    <div class="preview"></div>
    <div class="captcha-form">
      <input type="text" id="captcha-form" placeholder="Enter captcha text">
      <button class="captcha-refresh">
        <i class="fa fa-refresh"></i>
      </button>
    </div>
  </div>
  <div class="form-input">
    <button type="submit" name="submit" id="login-btn">Login</button>
  </div>
</form>

<form method="POST" class="login-form" style="margin-top: 920px;margin-bottom: 50px;">
    <div class="form-title">
      Delete User
    </div>
    <div class="form-input">
      <label for="username">User Id</label>
      <input type="number" id="id" name="id" required min="1">
      <span class="error_mesg" id="username_err"></span>
    </div>
    <div class="form-input">
      <button type="submit" name="delete" id="login-btn">Delete</button>
    </div>
  </form>

<?php

$user_id ="";

if (isset($_POST['user_id'])) {
  // Sanitize the user ID input to prevent SQL injection
  $user_id = $conn->real_escape_string($_POST['user_id']);

  // Prepare and execute the query to retrieve user data
  $query = "SELECT * FROM users WHERE id = '$user_id'";
  $result = $conn->query($query);

  // Check if a user was found with the selected ID
  if ($result->num_rows == 1) {
      // Fetch the user data into an associative array
      $user_data = $result->fetch_assoc();

      // Display the user data in HTML form fields
      echo '<form method="POST" class="login-form" style="margin-top: 1720px;margin-bottom: 50px;">';
      echo '<div class="form-title">
              Update User
            </div>';
      echo '<div class="form-input"><label>Username:</label><input type="text" name="username" value="' . $user_data['username'] . '"></div>';
      echo '<div class="form-input"><label>Email:</label><input type="email" name="email" value="' . $user_data['email'] . '"></div>';
      echo '<div class="form-input"><label>Password:</label><input type="password" name="password" value="' . $user_data['password'] . '"></div>';
      echo '<div class="form-input"><label>Date of Birth:</label><input type="date" name="dob" value="' . $user_data['dob'] . '"></div>';
      echo '<div class="form-input"><label>Mobile:</label><input type="text" name="mobile" value="' . $user_data['mobile'] . '"></div>';
      echo '<div class="form-input"><label>Gender:</label><input type="text" name="gender" value="' . $user_data['gender'] . '"></div>';
      echo '<div class="form-input"><label>Department:</label><input type="text" name="dept" value="' . $user_data['dept'] . '"></div>';
      echo '<div class="form-input"><label>Address:</label><textarea name="address">' . $user_data['address'] . '</textarea></div>';
      echo '<div class="form-input">
                <button type="submit" name="update" id="login-btn">Update</button>
              </div>';
      echo '</form>';
  } else {
      // Display an error message if no user was found with the selected ID
      echo "User not found.";
  }
}

// Prepare and execute the query to retrieve all user IDs
$query = "SELECT id FROM users";
$result = $conn->query($query);

// Build the HTML select element with options
$options = '';
while ($row = $result->fetch_assoc()) {
  $options .= '<option value="' . $row['id'] . '">' . $row['id'] . '</option>';
}

// Output the HTML form and select element
// echo '<form method="post">';
// echo '<select name="user_id">' . $options . '</select>';
// echo '<input type="submit" value="Select">';
// echo '</form>';

?>

<form method="POST" class="login-form" style="margin-top: 1220px;margin-bottom: 50px;">
    <div class="form-title">
      Update User
    </div>
    <div class="form-input">
      <label for="username">User Ids</label>
      <?php
        echo '<select name="user_id">' . $options . '</select>';
        echo '<div class="form-input">
                <button type="submit" id="login-btn">Select</button>
              </div>';
      ?>
      <span class="error_mesg" id="username_err"></span>
    </div>
  </form>
  <script src='https://unpkg.com/sweetalert/dist/sweetalert.min.js'></script>
  <script  src="./script.js"></script>

</body>
</html>




<?php


    // Form submission handling
    if(isset($_POST['submit'])) {
      $username = $_POST['username'];
      $email = $_POST['email'];
      $password = $_POST['password'];
      $dob = $_POST['dob'];
      $mobile = $_POST['mobile'];
      $gender = $_POST['gender'];
      $dept = $_POST['dept'];
      $address = $_POST['address'];

      $sql = "INSERT INTO users (username, email, password, dob, mobile, gender, dept, address) VALUES ('$username', '$email', '$password', '$dob', '$mobile', '$gender', '$dept', '$address')";
      $result = mysqli_query($conn, $sql);

      if($result) {
        echo '<script>swal("Success", "Data inserted successfully", "success");</script>';
      } else {
        echo '<script>swal("Error", "Failed to insert data", "error");</script>';
      }
    }

    // Data deletion handling
    if(isset($_POST['delete'])) {
      $id = $_POST['id'];

      $sql = "DELETE FROM users WHERE id=$id";
      $result = mysqli_query($conn, $sql);

      if($result) {
        echo '<script>swal("Success", "Data deleted successfully", "success");</script>';
      } else {
        echo '<script>swal("Error", "Failed to delete data", "error");</script>';
      }
    }

    // Data update handling
    if(isset($_POST['update'])) {
      // $id = $_POST['id'];
      $username = $_POST['username'];
      $email = $_POST['email'];
      $password = $_POST['password'];
      $dob = $_POST['dob'];
      $mobile = $_POST['mobile'];
      $gender = $_POST['gender'];
      $dept = $_POST['dept'];
      $address = $_POST['address'];

      $sql = "UPDATE users SET username='$username', email='$email', password='$password', dob='$dob', mobile='$mobile', gender='$gender', dept='$dept', address='$address' WHERE id=$user_id";
      $result = mysqli_query($conn, $sql);

      if($result) {
        echo '<script>swal("Success", "Data updated successfully", "success");</script>';
      } else {
        echo '<script>swal("Error", "Failed to update data", "error");</script>';
      }
    }
  ?>