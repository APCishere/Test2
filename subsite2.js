document.addEventListener('scroll', () => {
  const slideshow = document.querySelector('.slideshow-container');

  if (window.scrollY > 100) { // Adjust scroll threshold as needed
    slideshow.style.opacity = 1;
  } else {
    slideshow.style.opacity = 0;
  }
});
