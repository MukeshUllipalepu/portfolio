document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("MtdKTgohifofBkAq1"); // Replace with your EmailJS Public Key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading

        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Send email via EmailJS
        emailjs.send("service_f3r7z13", "template_nrvodrx", {
            from_name: name,
            from_email: email,
            message: message
        }).then(
            function (response) {
                document.getElementById("response-message").textContent = "✅ Message sent successfully!";
                document.getElementById("contact-form").reset(); // Clear form
            },
            function (error) {
                document.getElementById("response-message").textContent = "❌ Failed to send message. Try again!";
            }
        );
    });
});
