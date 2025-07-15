document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.querySelector('.cards-container');
    const cards = document.querySelectorAll('.card-body');
    const prevBtn = document.querySelector('.buttons-container button:first-child');
    const nextBtn = document.querySelector('.buttons-container button:last-child');
  
    let currentIndex = 0;
    const totalCards = cards.length;
  
    function updateSlider() {
      const cardWidth = cards[0].offsetWidth;
  
      const style = getComputedStyle(cardsContainer);
      const gapValue = style.gap || style.columnGap || "0px";
      const gap = parseInt(gapValue) || 0;
  
      const totalCardWidth = cardWidth + gap;
  
      if (window.innerWidth <= 960) {
        cards.forEach(card => card.classList.add('-active'));
        cardsContainer.style.transform = 'none';
  
        prevBtn.classList.remove('-active');
        nextBtn.classList.remove('-active');
        cardsContainer.style.overflowX = 'auto'; 
        cardsContainer.style.scrollBehavior = 'auto'; 
      } else {
        cardsContainer.style.overflowX = 'hidden';
        cardsContainer.style.scrollBehavior = 'smooth';
  
        const offset = (-currentIndex * totalCardWidth);
        cardsContainer.style.transform = `translateX(${offset}px)`;
  
        cards.forEach((card, i) => {
          card.classList.toggle('-active', i === currentIndex);
        });
  
        prevBtn.classList.toggle('-active', currentIndex > 0);
        nextBtn.classList.toggle('-active', currentIndex < totalCards - 1);
      }
    }
  
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
  
    nextBtn.addEventListener('click', () => {
      if (currentIndex < totalCards - 1) {
        currentIndex++;
        updateSlider();
      }
    });
  
    let startX = 0;
    let scrollStart = 0;
  
    cardsContainer.addEventListener('touchstart', (e) => {
      if (window.innerWidth > 960) return;
  
      startX = e.touches[0].pageX;
      scrollStart = cardsContainer.scrollLeft;
    });
  
    cardsContainer.addEventListener('touchmove', (e) => {
      if (window.innerWidth > 960) return;
  
      const x = e.touches[0].pageX;
      const walk = startX - x;
      cardsContainer.scrollLeft = scrollStart + walk;
    });
  
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960 && currentIndex >= totalCards) {
        currentIndex = totalCards - 1;
      }
      updateSlider();
    });
  
    updateSlider();
  });
  