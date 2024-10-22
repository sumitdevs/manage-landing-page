const toggleBtn = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const iconClose = document.querySelector('.icon-close');
const iconHamburger = document.querySelector('.icon-hamburger');
const primaryHeader = document.querySelector('.primary-header');

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: true,
    arrows: false,
    responsive: {
        
        480: {
          dots: false,
        }
      }
  });
toggleBtn.addEventListener('click', ()=>{
    iconHamburger.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
    if(primaryNav.hasAttribute("data-visible")){
        toggleBtn.setAttribute("aria-expanded", false);
    } else{
        toggleBtn.setAttribute("aria-expanded", true);

    }
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
});

