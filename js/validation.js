document.addEventListener('DOMContentLoaded', function () {

    // ==========================
    // FULL NAME VALIDATION
    // ==========================
    const fullName = document.getElementById("fullName");
    const nameError = document.getElementById("nameError");
    // Regex: At least 2 letters per word, must contain first + last name
    const namePattern = /^[A-Za-z]{2,}(?:\s+[A-Za-z]{2,})+$/;

    fullName.addEventListener("input", () => {
        if (fullName.value === "") {
            // Hide error when field is empty
            nameError.style.display = "none";
            fullName.setCustomValidity("");
            return;
        }

        if (!namePattern.test(fullName.value.trim())) {
            // Show error if name does not match pattern
            nameError.style.display = "inline";
            fullName.setCustomValidity("Invalid full name");
        } else {
            // Clear error when input is valid
            nameError.style.display = "none";
            fullName.setCustomValidity("");
        }
    });

    // ==========================
    // EMAIL VALIDATION
    // ==========================
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    // Regex: simple pattern (text@text.domain)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    email.addEventListener("input", () => {
        if (email.value === "") {
            // Hide error if empty
            emailError.style.display = "none";
            email.setCustomValidity("");
            return;
        }

        if (!emailPattern.test(email.value.trim())) {
            // Show error if invalid email format
            emailError.style.display = "inline";
            email.setCustomValidity("Invalid email address");
        } else {
            // Valid email → hide error
            emailError.style.display = "none";
            email.setCustomValidity("");
        }
    });

    // ==========================
    // PASSWORD VALIDATION
    // ==========================
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const passError = document.getElementById("passError");
    const conPassError = document.getElementById("conPassError");

    // Regex: minimum 8 chars, at least one uppercase, lowercase, number & special char
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Real-time validation for password
    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value.trim();

        if (!passwordPattern.test(password)) {
            // Show error if password doesn't meet requirements
            passError.style.display = "inline";
        } else {
            // Hide error if valid
            passError.style.display = "none";
        }
    });

    // Confirm password validation
    confirmPasswordInput.addEventListener("input", function () {
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (confirmPassword !== password) {
            // Show error if passwords do not match
            conPassError.style.display = "block";
            conPassError.textContent = "Passwords do not match.";
        } else {
            // Hide error if both match
            conPassError.style.display = "none";
        }
    });

    // ==========================
    // FINAL FORM VALIDATION ON SUBMIT
    // ==========================
    const form = document.querySelector('.needs-validation');
    form.addEventListener('submit', function (event) {
        // Prevent submission if form is invalid
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        // Add Bootstrap class for visual validation feedback
        form.classList.add('was-validated');
    }, false);
});
