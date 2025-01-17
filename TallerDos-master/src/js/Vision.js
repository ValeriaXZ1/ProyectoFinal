const video = document.querySelector('.video');
video.addEventListener('mouseenter', () => {
  video.style.transform = "scale(1.1)";
});

video.addEventListener('mouseleave', () => {
  video.style.transform = "scale(1)";
});
