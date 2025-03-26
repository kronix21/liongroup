const slides = document.querySelector('.item-slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slider-button-left');
const nextBtn = document.querySelector('.slider-button-right');

let currentIndex = 0;
const totalSlides = slide.length;

let currentSlide = 0;
let totalSlide = slide.length;

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

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Возврат к первому слайду
  }
  updateSliderPosition();
  updateCounter(currentIndex);
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1; // Переход на последний слайд
  }
  updateSliderPosition();
  updateCounter(currentIndex);
});


