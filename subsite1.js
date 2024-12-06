// JavaScript to change the background color as you scroll
document.addEventListener("scroll", () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = window.scrollY / maxScroll;

  // Map the scroll percentage to a color scale
  const red = Math.min(244 + Math.round(scrollPercentage * (51)), 255);
  const green = Math.min(244 - Math.round(scrollPercentage * (50)), 255);
  const blue = Math.min(249 - Math.round(scrollPercentage * (149)), 255);

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
