document.addEventListener("scroll", () => {
  const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = scrollHeight / maxScroll;

  // Interpolate between base color and max shade
  const startColor = [231, 223, 232]; // #e7dfe8
  const endColor = [156, 157, 255]; // #9c9dff

  const currentColor = startColor.map((start, index) =>
    Math.round(start + (endColor[index] - start) * scrollFraction)
  );

  document.body.style.backgroundColor = `rgb(${currentColor.join(",")})`;
});
