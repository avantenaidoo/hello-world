document.addEventListener('DOMContentLoaded', () => {
  const elementsToFadeIn = document.querySelectorAll('.fade-in');
  const elementsToSlideIn = document.querySelectorAll('.slide-in');

  const fadeIn = (element) => {
    element.classList.add('fade-in');
  };

  const slideIn = (element) => {
    element.classList.add('slide-in');
  };

  elementsToFadeIn.forEach((element) => {
    element.addEventListener('mouseover', () => fadeIn(element));
  });

  elementsToSlideIn.forEach((element) => {
    element.addEventListener('click', () => slideIn(element));
  });
});
