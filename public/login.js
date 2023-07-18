// Function to handle logout
function logout() {
    // Redirects to the logout page
    window.location.href = 'logout.html';
}
// Calls logout function when the page loads
window.onload = logout;

// Function to handle login and logout
function login() {
}
function logout() {
}
// Render the login and logout id's
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');
// Added Event Listener to trigger the login and logout functions
loginButton.addEventListener('click',login);
logoutButton.addEventListener('click', login);