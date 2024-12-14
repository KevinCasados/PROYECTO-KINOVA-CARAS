document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscriptionForm');
    const nameInput = document.querySelector('.input-fild[placeholder="Nombre"]');
    const emailInput = document.querySelector('.input-fild[placeholder="Email"]');
    const alertBox = document.createElement('div');
  
    // Estilo inicial para el cuadro de alertas
    alertBox.style.position = 'fixed';
    alertBox.style.top = '-100px';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translateX(-50%)';
    alertBox.style.padding = '10px 20px';
    alertBox.style.borderRadius = '5px';
    alertBox.style.transition = 'top 0.5s ease';
    alertBox.style.zIndex = '1000';
    document.body.appendChild(alertBox);
  
    const showAlert = (message, type) => {
      alertBox.textContent = message;
      alertBox.style.backgroundColor = type === 'success' ? '#4CAF50' : '#F44336';
      alertBox.style.color = '#fff';
      alertBox.style.top = '20px';
  
      setTimeout(() => {
        alertBox.style.top = '-100px';
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