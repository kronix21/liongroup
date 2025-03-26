const slides = document.querySelector('.item-slides');
const slide = document.querySelectorAll('.slide');
const left_move = document.querySelector('.slider-button-left');
const right_move = document.querySelector('.slider-button-right');

let currentIndex = 0;
const totalSlides = slide.length;
let currentSlide = 0;

function changeSlide(index) {
  currentSlide = index;
  updateCounter(currentSlide);
}

function updateCounter(index) {
  let text = (index + 1).toString().padStart(2, '0');
  console.log(text)
  document.getElementById('count-slides').textContent = text;
}

function updateSliderPosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

right_move.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSliderPosition();
  updateCounter(currentIndex);
});

left_move.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1;
  }
  updateSliderPosition();
  updateCounter(currentIndex);
});


