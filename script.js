// Function to show a greeting
function showGreeting() {
    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) {
        message = "Good Morning!";
    } else if (hour < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }

    alert(message + " Welcome to my website!");
}

// Add an event listener to the button once the page loads
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn');
    if (button) {
        button.addEventListener('click', showGreeting);
    }
});
