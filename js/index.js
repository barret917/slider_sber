// Получаем все нужные элементы
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider-item");
const playButton = document.querySelector(".play");
const stopButton = document.querySelector(".stop");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentSlide = 0; // Текущий слайд
let autoSlideInterval; // Переменная для хранения интервала авто-слайдера
const slideInterval = 3000; // Время между слайдами (3 секунды)
let isPlaying = false;

// Функция показа слайда
function showSlide(index) {
  // Убедимся, что индекс не выходит за пределы слайдов
  if (index >= slides.length) {
    currentSlide = 0; // Возвращаемся к первому слайду
  } else if (index < 0) {
    currentSlide = slides.length - 1; // Переход к последнему слайду
  } else {
    currentSlide = index;
  }

  // Смещаем слайдер влево на ширину одного слайда
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Автоматическое перелистывание
function autoSlide() {
  stopSlide(); // Останавливаем, если уже работает
  autoSlideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, slideInterval);
}

// Остановка автоматического перелистывания
function stopSlide() {
  clearInterval(autoSlideInterval); // Останавливаем авто-слайдер
}

// Ручное переключение
function prevSlide() {
  showSlide(currentSlide - 1); // Переход на предыдущий слайд
  stopSlide(); // Останавливаем авто-слайд при ручном управлении
}

function nextSlide() {
  showSlide(currentSlide + 1); // Переход на следующий слайд
  stopSlide(); // Останавливаем авто-слайд при ручном управлении
}


playButton.addEventListener('click', function () {
  if (!isPlaying) {
    playButton.classList.add('active');
    isPlaying = true;
  }
});

stopButton.addEventListener('click', function () {
  playButton.classList.remove('active');
  isPlaying = false;
});
// Обработчики событий для кнопок
playButton.addEventListener("click", autoSlide); // Нажатие Play запускает авто-слайд
stopButton.addEventListener("click", stopSlide); // Нажатие Stop останавливает авто-слайд
prevButton.addEventListener("click", prevSlide); // Нажатие Prev переключает на предыдущий слайд
nextButton.addEventListener("click", nextSlide); // Нажатие Next переключает на следующий слайд
