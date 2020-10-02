const message = "Merci d'avoir soumis votre question. L'équipe répondra sous peu.";

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();
        alert(message);
    });