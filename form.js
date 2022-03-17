const message =
"Merci de nous avoir contacté, nous faisons le necessaire afin de répondre au mieux à votre demande";

document.getElementsByClassName("contact__form")
.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});