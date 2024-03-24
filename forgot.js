document.getElementById("forgot-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("forgot-email").value;
    const successMessage = document.createElement("p");
    successMessage.textContent = "An email has been sent to your email address with password reset instructions.";
    const form = document.getElementById("forgot-form");
    form.parentNode.insertBefore(successMessage, form.nextSibling);
    form.style.display = "none";
});