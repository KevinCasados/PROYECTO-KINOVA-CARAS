document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let lastScrollY = 0;
  
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > 50) {
        header.classList.add('sticky');
        header.classList.remove('top');
        header.style.backgroundColor = '#ed1e1e';
        header.style.top = '0'; // Se asegura de que esté visible
      } else {
        header.classList.remove('sticky');
        header.classList.add('top');
        header.style.backgroundColor = 'transparent'; // Fondo inicial
        header.style.top = '0'; // Siempre visible en la parte superior
      }
  
      lastScrollY = currentScrollY;
    });
  });
  