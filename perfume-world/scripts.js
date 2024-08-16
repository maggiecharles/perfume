document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Placeholder for actual authentication logic
    if (username === 'admin' && password === 'password123') {
        alert('Login successful');
        // Redirect to the homepage or perform other actions upon successful login
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const errorMessage = document.getElementById('register-error-message');

    // Placeholder for actual registration logic
    if (username && email && password) {
        alert('Registration successful');
        // Redirect to the login page or perform other actions upon successful registration
        window.location.href = 'login.html';
    } else {
        errorMessage.textContent = 'Please fill in all fields';
        errorMessage.style.display = 'block';
    }
});
