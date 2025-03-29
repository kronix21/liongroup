const slides_3 = document.querySelector('.img-seventh');
const slide_3 = document.querySelectorAll('.slide_3');
const left_move_3 = document.querySelector('.slider_3-button-left');
const right_move_3 = document.querySelector('.slider_3-button-right');

let currentIndex_3 = 0;
const totalSlides_3 = slide_3.length;
let currentSlide_3 = 0;

function changeSlide_3(index) {
  currentSlide_3 = index;
  updateCounter(currentSlide_3);
}

function updateCounter_3(index) {
  let text = (index + 1).toString().padStart(2, '0');
  console.log(text)
  document.getElementById('count-slides_3').textContent = text;
}

function updateSliderPosition_3() {
  slides_3.style.transform = `translateX(-${currentIndex_3 * 255}px) translateX(-${currentIndex_3 * 30}px)`;
}

right_move_3.addEventListener('click', () => {
  if (currentIndex_3 < totalSlides_3 - 1) {
    currentIndex_3++;
  } else {
    currentIndex_3 = 0;
  }
  updateSliderPosition_3();
  updateCounter_3(currentIndex_3);
});

left_move_3.addEventListener('click', () => {
  if (currentIndex_3 > 0) {
    currentIndex_3--;
  } else {
    currentIndex_3 = totalSlides_3 - 1;
  }
  updateSliderPosition_3();
  updateCounter_3(currentIndex_3);
});


