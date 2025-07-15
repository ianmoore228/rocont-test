document.addEventListener("DOMContentLoaded", () => {
    const burgerBtn = document.querySelector('.burger-button');
    const mobileNav = document.querySelector('.mobile-nav');
  
    if (!burgerBtn || !mobileNav) return;
  
    let isOpen = false;
  
    burgerBtn.addEventListener('click', () => {
      if (isOpen) {
        mobileNav.classList.remove('animate-in');
        mobileNav.classList.add('animate-out');
        setTimeout(() => {
          mobileNav.classList.add('-hidden');
          mobileNav.classList.remove('animate-out');
        }, 300);
      } else {
        mobileNav.classList.remove('-hidden');
        mobileNav.classList.remove('animate-out');
        mobileNav.classList.add('animate-in');
      }
  
      isOpen = !isOpen;
    });
  });
  