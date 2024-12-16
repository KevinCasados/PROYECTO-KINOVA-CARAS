document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      header.classList.add('sticky', 'scrolled');
      header.classList.remove('top');
    } else {
      header.classList.remove('sticky', 'scrolled');
      header.classList.add('top');
    }
  });
});
  