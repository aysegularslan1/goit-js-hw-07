const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputs = form.querySelectorAll('input');
  const formData = {};

  for (const input of inputs) {
    const { name, value } = input;

    if (value.trim() === '') {
      alert('All form fields must be filled in');
      return;
    }

    formData[name] = value.trim();
  }

  console.log(formData);
  form.reset();
});
