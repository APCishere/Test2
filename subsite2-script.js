document.addEventListener('scroll', () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = window.scrollY / maxScroll;

  // Change background color as you scroll
  const newColor = Math.max(156, 231 - scrollFraction * 75);
  document.body.style.backgroundColor = `rgb(${newColor}, ${newColor}, 255)`;

  // Display the image when you scroll down
  const imageContainer = document.querySelector('.scroll-image-container');
  if (window.scrollY > 200) { // Adjust scroll threshold as needed
    imageContainer.style.opacity = 1;
    imageContainer.style.transform = 'translateY(0)';
  } else {
    imageContainer.style.opacity = 0;
    imageContainer.style.transform = 'translateY(20px)';
  }
});
