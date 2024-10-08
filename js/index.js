const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider-item");
const playButton = document.querySelector(".play");
const stopButton = document.querySelector(".stop");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentSlide = 0;
let autoSlideInterval;
const slideInterval = 2500;
let isPlaying = false;

function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function autoSlide() {
  stopSlide();
  autoSlideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, slideInterval);
  playButton.classList.add("active");
  isPlaying = true;
}

function stopSlide() {
  clearInterval(autoSlideInterval);
  playButton.classList.remove("active");
  isPlaying = false;
}

function prevSlide() {
  showSlide(currentSlide - 1);
  stopSlide();
}

function nextSlide() {
  showSlide(currentSlide + 1);
  stopSlide();
}

playButton.addEventListener("click", autoSlide);
stopButton.addEventListener("click", stopSlide);
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);