<<<<<<< HEAD
document.getElementById("submit").addEventListener("click", function() {
  alert("Merci d'avoir choisi notre établissement. Nous faisons le nécessaire pour répondre au mieux à votre demande. A très vite, L'équipe du Cenitz restaurant.");
});

=======
const message =
"Merci de nous avoir contacté, nous faisons le necessaire afin de répondre au mieux à votre demande";

document.getElementsByClassName("contact__form")
.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
>>>>>>> 696f183 (STYLE: MAJ du scss + tentative de JS pour le submit button)
