document.addEventListener('scroll', () => {
  const slideshow = document.querySelector('.slideshow-container');

  if (window.scrollY > 100) { // Adjust scroll threshold as needed
    slideshow.style.opacity = 1;
    slideshow.style.left = '10%'; // Move into view
  } else {
    slideshow.style.opacity = 0;
    slideshow.style.left = '-100%'; // Hide off-screen
  }
});

// Slideshow logic
let currentIndex = 0;
const images = document.querySelectorAll('.slideshow-image');

function changeSlide() {
  images.forEach((img, index) => {
    img.style.display = index === currentIndex ? 'block' : 'none';
  });
  currentIndex = (currentIndex + 1) % images.length;
}

// Start changing slides every 2 seconds
setInterval(changeSlide, 2000);
