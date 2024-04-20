const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  const scrollHeight = Math.round(window.scrollY);
  if (scrollHeight > 50) {
    header.classList.add('header_sticky');
  } else {
    header.classList.remove('header_sticky');
  }
});

const headerNavBtn = document.querySelector('.header__nav-btn');
const headerWrapper = document.querySelector('.header__wrapper');

headerNavBtn.addEventListener('click', () => {
  headerWrapper.classList.toggle('header__wrapper_open');
});
