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

/* ==========================================================
   FAQ Accordion Interaction
   Author: David Gomez
   Description: Toggles FAQ answers open/closed.
   ========================================================== */

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('span');

        const isOpen = !answer.classList.contains('hidden');

        // Close all others
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
        document.querySelectorAll('.faq-item span').forEach(i => i.textContent = '+');

        // Toggle current
        if (!isOpen) {
            answer.classList.remove('hidden');
            icon.textContent = '–';
        } else {
            answer.classList.add('hidden');
            icon.textContent = '+';
        }
    });
});