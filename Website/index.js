//For Image Slider 
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');
let index = 0;

// Function for forward Button

next.addEventListener('click', () => {
  index++;
  if (index === slides.length) {
    index = 0;
  }
  changeSlide();
});

// Function for Backward Button

prev.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  changeSlide();
});

//To display the Images in Infinite Loop
 
function changeSlide() {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[index].style.display = 'block';
}
let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  index++;
  if (index === slides.length) {
    index = 0;
  }
  changeSlide();
}

