document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscriptionForm');
  const nameInput = document.querySelector('.input-fild[placeholder="Nombre"]');
  const emailInput = document.querySelector('.input-fild[placeholder="Email"]');
  const alertBox = document.createElement('div');

  // Inicializar el cuadro de alertas con una clase base
  alertBox.className = 'alert-box';
  document.body.appendChild(alertBox);

  const showAlert = (message, type) => {
    alertBox.textContent = message;
    alertBox.classList.remove('alert-success', 'alert-error');
    alertBox.classList.add(type === 'success' ? 'alert-success' : 'alert-error', 'alert-visible');

    setTimeout(() => {
      alertBox.classList.remove('alert-visible');
    }, 4000);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    let isValid = true;

    // Validación del campo de nombre
    if (nameValue === '') {
      showAlert('El campo de nombre no puede estar vacío.', 'error');
      isValid = false;
    }

    // Validación del campo de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      showAlert('El correo electrónico no tiene un formato válido.', 'error');
      isValid = false;
    }

    if (isValid) {
      showAlert('¡Suscripción exitosa!', 'success');
      form.reset();
    }
  });
});