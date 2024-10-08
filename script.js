document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const affiliation = document.getElementById("affiliation").value;
    const message = document.getElementById("message").value;

    // You can replace the following alert with an AJAX call to your server to handle form submission
    alert(`Thank you for signing up, ${name}! We will contact you at ${email}.`);

    // Clear the form fields
    document.getElementById("signup-form").reset();
});
