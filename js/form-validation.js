document.getElementById('contact-form').addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    document.querySelector('.alert').innerHTML = 'Email Characters must be in lower Case!';
    event.target.reset();
  }
});