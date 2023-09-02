contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields.");
    } else {
      alert("Form submitted successfully!");
      // Here, you can send the form data to your server using AJAX or any other method.
      // For this example, we're just showing an alert.
    }
  });
