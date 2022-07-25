  const message = document.getElementById("reservation-message");

  const form = document.querySelector(".reservation-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    message.innerHTML =`Thank You ${form.name.value} for your reservation! `
  });