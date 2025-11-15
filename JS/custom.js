document.addEventListener("DOMContentLoaded", () => {

  // Contact form handling
  const form = document.querySelector("#contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    alert("Thank you, " + name + "! Your message has been sent.");
    form.reset();
  });

});
