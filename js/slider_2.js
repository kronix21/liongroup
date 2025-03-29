const slides_2 = document.querySelector('.sixth-part-cards');
const slide_2 = document.querySelectorAll('.sixth-part-card, .sixth-part-card-2');
const left_move_2 = document.querySelector('.slider_2-button-left');
const right_move_2 = document.querySelector('.slider_2-button-right');

let currentIndex_2 = 0;
const totalSlides_2 = slide_2.length;
let currentSlide_2 = 0;

function changeSlide_2(index) {
  currentSlide_2 = index;
  updateCounter(currentSlide_2);
}

function updateCounter_2(index) {
  let text = (index + 1).toString().padStart(2, '0');
  console.log(text)
  document.getElementById('count-slides_2').textContent = text;
}

function updateSliderPosition_2() {
  slides_2.style.transform = `translateX(-${currentIndex_2 * 100}%) translateX(-${currentIndex_2 * 42}px)`;
}

right_move_2.addEventListener('click', () => {
  if (currentIndex_2 < totalSlides_2 - 1) {
    currentIndex_2++;
  } else {
    currentIndex_2 = 0;
  }
  updateSliderPosition_2();
  updateCounter_2(currentIndex_2);
});

left_move_2.addEventListener('click', () => {
  if (currentIndex_2 > 0) {
    currentIndex_2--;
  } else {
    currentIndex_2 = totalSlides_2 - 1;
  }
  updateSliderPosition_2();
  updateCounter_2(currentIndex_2);
});


