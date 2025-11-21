/* ==========================================================
   Form Validation + Analytics Mock
   Author: David Gomez
   Description: Client-side validation and event tracking simulation.
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("leadForm");
    const messageBox = document.getElementById("formMessage");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Validation
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const location = document.getElementById("location").value.trim();

        if (!name || !phone || !email || !location) {
            messageBox.textContent = "Please fill out all required fields.";
            messageBox.className = "mt-6 text-center font-semibold text-red-600";
            messageBox.classList.remove("hidden");
            return;
        }

        // Mock success
        messageBox.textContent = "Your request has been submitted successfully!";
        messageBox.className = "mt-6 text-center font-semibold text-green-600";
        messageBox.classList.remove("hidden");

        console.log("Form submitted:", { name, phone, email, location });
    });
});

// Analytics CTA Logger
function logCTA() {
    console.log("CTA Clicked – Lead Form Submission Initiated");
}