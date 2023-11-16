function sendEmail(event) {
    event.preventDefault(); // Prevents form from submitting in the traditional way
    var userEmail = document.getElementById('userEmail').value;
    var establishedEmail = "adrianrobertocarmona49@gmail.com"; // Replace with your established email address
    var mailtoLink = 'mailto:' + establishedEmail + '?subject=Contact Request&body=My email: ' + userEmail;

    // Using setTimeout to delay the action slightly
    setTimeout(function() {
        window.location.href = mailtoLink;
    }, 100); // Delay of 100 milliseconds
}
