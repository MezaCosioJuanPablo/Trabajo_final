// main.js
document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const ageInput = document.getElementById("ageInput");
  const discountMessage = document.getElementById("discountMessage");
  const age = parseInt(ageInput.value);

  if (age < 15) {
    discountMessage.innerHTML =
      '<div class="alert alert-success">¡Tienes derecho a un descuento!</div>';
  } else {
    discountMessage.innerHTML =
      '<div class="alert alert-danger">Lo sentimos, no tienes derecho a un descuento.</div>';
  }
});
