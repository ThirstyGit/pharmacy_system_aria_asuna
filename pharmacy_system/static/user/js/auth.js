// Selecting elements.
const formInputs = document.querySelectorAll('.form input');
const ul = document.querySelector('ul');

formInputs.forEach(formInput => {
  formInput.addEventListener('focus', () => {
    if (formInput.nextElementSibling) {
      if (formInput.id === 'id_password1') {
        ul.classList.add("helptext_active");
      }
      else {
        formInput.nextElementSibling.classList.add("helptext_active");
      }
    }
  });
  formInput.addEventListener("focusout", () => {
    if (formInput.nextElementSibling) {
      if (formInput.id === "id_password1") {
        ul.classList.remove("helptext_active");
      }
      else {
        formInput.nextElementSibling.classList.remove("helptext_active");
      }
    }
  });
})
