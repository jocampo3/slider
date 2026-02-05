let carousel = document.querySelector('.slider');
let slides = document.querySelectorAll('.slider picture');
let index = 0;
let timer = setInterval(next, 3000);

function slideWidth() {
  return carousel.clientWidth;
}

function restartTimer() {
  clearInterval(timer);
  timer = setInterval(next, 3000);
}

function goTo(i) {
  index = i;
  carousel.scrollTo({ left: index * slideWidth(), behavior: "smooth" });
  restartTimer();
}

function next() {
  index = (index + 1) % slides.length;
  carousel.scrollTo({ left: index * slideWidth(), behavior: "smooth" });
}

window.addEventListener('load', restartTimer);
window.addEventListener('resize', () => goTo(index));
