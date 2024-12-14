document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menuHamburguesa = document.querySelector('.menu-hamburguesa');
  const closeButton = document.querySelector('.menu-hamburguesa .close-button');

  // Función para alternar el menú
  const toggleMenu = () => {
    menuHamburguesa.classList.toggle('active');
    hamburger.classList.toggle('active');
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    menuHamburguesa.classList.remove('active');
    hamburger.classList.remove('active');
  };

  // Abrir/cerrar el menú al hacer clic en el botón hamburguesa
  hamburger.addEventListener('click', toggleMenu);

  // Cerrar el menú al hacer clic en el botón de cerrar
  closeButton.addEventListener('click', closeMenu);

  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener('click', (event) => {
    if (!menuHamburguesa.contains(event.target) && !hamburger.contains(event.target)) {
      closeMenu();
    }
  });

  // Cerrar el menú automáticamente cuando la pantalla sea mayor a 1094px
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1094) {
      closeMenu();
    }
  });
});