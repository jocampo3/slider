class Slider {
  constructor(container, interval = 3000) {
    this.container = container;
    this.slider = container.querySelector('.slider');
    this.slides = this.slider.querySelectorAll('picture');
    this.prevBtn = container.querySelector('.btn-prev');
    this.nextBtn = container.querySelector('.btn-next');

    this.index = 0;
    this.interval = interval;
    this.timer = null;

    // drag state
    this.mouseDown = false;
    this.startX = 0;
    this.scrollLeft = 0;

    this.addListeners();
    this.restartTimer();
  }

  slideWidth() {
    return this.slider.clientWidth;
  }

  restartTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.next(), this.interval);
  }

  goTo(i) {
    this.index = (i + this.slides.length) % this.slides.length;
    this.slider.scrollTo({
      left: this.index * this.slideWidth(),
      behavior: 'smooth'
    });
    this.restartTimer();
  }

  next() {
    this.goTo(this.index + 1);
  }

  getCurrentIndex() {
    return Math.round(this.slider.scrollLeft / this.slideWidth());
  }

  startDragging = (e) => {
    e.preventDefault();
    this.mouseDown = true;
    this.slider.style.scrollSnapType = 'none';
    this.startX = e.pageX;
    this.scrollLeft = this.slider.scrollLeft;
  };

  stopDragging = () => {
    if (!this.mouseDown) return;
    this.mouseDown = false;
    this.slider.style.scrollSnapType = 'x mandatory';
    this.index = this.getCurrentIndex();
    this.restartTimer();
  };

  move = (e) => {
    if (!this.mouseDown) return;
    e.preventDefault();
    const walk = e.pageX - this.startX;
    this.slider.scrollLeft = this.scrollLeft - walk;
  };

  addListeners() {
    this.slider.addEventListener('mousedown', this.startDragging);
    this.slider.addEventListener('mousemove', this.move);
    this.slider.addEventListener('mouseup', this.stopDragging);
    this.slider.addEventListener('mouseleave', this.stopDragging);

    this.prevBtn.addEventListener('click', () =>
      this.goTo(this.index - 1)
    );
    this.nextBtn.addEventListener('click', () =>
      this.goTo(this.index + 1)
    );

    window.addEventListener('resize', () =>
      this.goTo(this.index)
    );
  }
}

document.querySelectorAll('.slider-container').forEach(
	container => new Slider(container)
);
