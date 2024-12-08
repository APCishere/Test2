const images = ["images/image1.png", "images/image2.png", "images/image3.png"];
let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");

// Function to update the image
function updateImage() {
  sliderImage.style.opacity = 0; // Fade-out effect
  setTimeout(() => {
    sliderImage.src = images[currentIndex];
    sliderImage.style.opacity = 1; // Fade-in effect
  }, 500); // Match fade-out duration
}

// Function to show the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

// Function to show the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

// Auto-slide every 5 seconds
setInterval(nextImage, 5000);

document.addEventListener("scroll", () => {
  const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = scrollHeight / maxScroll;

  // Interpolate between base color and max shade
  const startColor = [231, 223, 232]; // #e7dfe8
  const endColor = [169, 145, 255]; // #9c9dff

  const currentColor = startColor.map((start, index) =>
    Math.round(start + (endColor[index] - start) * scrollFraction)
  );

  document.body.style.backgroundColor = `rgb(${currentColor.join(",")})`;
});
