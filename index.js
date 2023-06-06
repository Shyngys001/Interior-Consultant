document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.main-nav');

    const burger = nav.querySelector('.burger');
    burger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  });
  
  let isHidden = false;

  function toggleVisibility() {
    const elementsToShowHide = document.querySelectorAll('.main, footer');
  
    elementsToShowHide.forEach(element => {
      element.style.display = isHidden ? 'block' : 'none';
    });
  
    isHidden = !isHidden;
  }
  
  function hide() {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', toggleVisibility);
  }
  
