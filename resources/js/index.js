// let slider = document.querySelector('.slider');
// let slides = document.querySelectorAll('.slider picture');
// let index = 0;
// let timer = setInterval(next, 3000);
//
// function slideWidth() {
//   return slider.clientWidth;
// }
//
// function restartTimer() {
//   clearInterval(timer);
//   timer = setInterval(next, 3000);
// }
//
// function goTo(i) {
//   index = i;
//   slider.scrollTo({ left: index * slideWidth(), behavior: "smooth" });
//   restartTimer();
// }
//
// function next() {
//   index = (index + 1) % slides.length;
//   slider.scrollTo({ left: index * slideWidth(), behavior: "smooth" });
// }
//
// let mouseDown = false;
// let startX, scrollLeft;
//
// const startDragging = (e) => {
//   e.preventDefault();
//   mouseDown = true;
//   slider.style.scrollSnapType = 'none';
//   startX = e.pageX;
//   scrollLeft = slider.scrollLeft;
// }
//
// function getCurrentIndex() {
//   const slideWidth = slider.clientWidth;
//   const scrollLeft = slider.scrollLeft;
//   return Math.round(scrollLeft / slideWidth);
// }
//
// const stopDragging = () => {
//   mouseDown = false;
//   slider.style.scrollSnapType = 'x mandatory';
//   index = getCurrentIndex();
//   restartTimer();
// }
//
// const move = (e) => {
//   if (!mouseDown) return;
//   e.preventDefault();
//   const x = e.pageX;
//   const walk = x - startX;
//   slider.scrollLeft = scrollLeft - walk;
// }
//
// slider.addEventListener('mousemove', move, false);
// slider.addEventListener('mousedown', startDragging, false);
// slider.addEventListener('mouseup', stopDragging, false);
// slider.addEventListener('mouseleave', stopDragging, false);
//
// window.addEventListener('load', restartTimer);
// window.addEventListener('resize', () => goTo(index));
