const slider = document.querySelector("#slider");
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let interval;
const totalSlides = slide.length;

// Criar bolinhas
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

function updateDots() {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function showSlide(i) {
  index = (i + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

next.addEventListener("click", () => showSlide(index + 1));
prev.addEventListener("click", () => showSlide(index - 1));

// Auto play
function startAutoPlay() {
  interval = setInterval(() => {
    showSlide(index + 1);
  }, 4000);
}

function stopAutoPlay() {
  clearInterval(interval);
}

slider.addEventListener("mouseenter", stopAutoPlay);
slider.addEventListener("mouseleave", startAutoPlay);

// Swipe mobile
let startX = 0;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    showSlide(index + 1);
  } else if (endX - startX > 50) {
    showSlide(index - 1);
  }
});

showSlide(index);
startAutoPlay();