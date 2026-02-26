//perfil

const userIcon = document.getElementById("userIcon");
const dropdown = document.getElementById("dropdownMenu");

userIcon.addEventListener("click", () => {
    dropdown.classList.toggle("show");
});

document.addEventListener("click", (e) => {
    if (!userIcon.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
    }
});

// ===============================
// CARRINHO
// ===============================

const abrirCarrinho = document.getElementById("abrirCarrinho");
const carrinho = document.getElementById("carrinho");
const fecharCarrinho = document.getElementById("fecharCarrinho");

// ABRIR
abrirCarrinho.addEventListener("click", () => {
    carrinho.classList.add("ativo");
});

// FECHAR NO X
fecharCarrinho.addEventListener("click", () => {
    carrinho.classList.remove("ativo");
});

// FECHAR CLICANDO FORA
document.addEventListener("click", (e) => {
    if (
        !carrinho.contains(e.target) &&
        !abrirCarrinho.contains(e.target)
    ) {
        carrinho.classList.remove("ativo");
    }
});

// FECHAR COM ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        carrinho.classList.remove("ativo");
    }
});

// FECHAR NO COMTINUAR COMPRANDO
const continuarComprando = document.getElementById("continuarComprando");
continuarComprando.addEventListener("click", () => {
    carrinho.classList.remove("ativo");
});

// CLICAR NO CONTINUAR E LEVAR AOS PRODUTOS 

continuarComprando.addEventListener("click", () => {
    carrinho.classList.remove("ativo");

    document.querySelector(".secao-produtos")
        .scrollIntoView({ behavior: "smooth" });
});


//Carrossel//

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

//Cards//

const buttons = document.querySelectorAll(".btn-toggle");

buttons.forEach(button => {
  button.addEventListener("click", function () {

    const card = this.closest(".card");
    const extraText = card.querySelector(".extra-text");

    if (extraText.style.maxHeight) {
      extraText.style.maxHeight = null;
      this.textContent = "Ler mais";
    } else {
      extraText.style.maxHeight = extraText.scrollHeight + "px";
      this.textContent = "Ler menos";
    }

  });
});