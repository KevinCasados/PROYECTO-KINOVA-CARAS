document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let currentIndex = 0;
    let autoSlideInterval;
  
    const updateCarousel = () => {
      items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
        indicators[index].classList.toggle('active', index === currentIndex);
      });
    };
  
    const goToNext = () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    };
  
    const goToPrevious = () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    };
  
    const startAutoSlide = () => {
      autoSlideInterval = setInterval(goToNext, 8000);
    };
  
    const stopAutoSlide = () => {
      clearInterval(autoSlideInterval);
    };
  
    arrowRight.addEventListener('click', () => {
      stopAutoSlide();
      goToNext();
      startAutoSlide();
    });
  
    arrowLeft.addEventListener('click', () => {
      stopAutoSlide();
      goToPrevious();
      startAutoSlide();
    });
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = index;
        updateCarousel();
        startAutoSlide();
      });
    });
  
    // Inicia el carrusel
    updateCarousel();
    startAutoSlide();
  });