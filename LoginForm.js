document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check if the username and password are correct (In a real scenario, this should be done server-side)
  if (username === 'user' && password === 'password') {
    displayMessage('success', 'Login successful!');
  } else {
    displayMessage('error', 'Invalid username or password');
  }
});

function displayMessage(type, message) {
  var errorMessage = document.getElementById('error-message');
  errorMessage.innerHTML = message;
  errorMessage.style.display = 'block';

  if (type === 'success') {
    errorMessage.style.color = 'green';
  } else {
    errorMessage.style.color = 'red';
  }
}

