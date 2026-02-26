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
// CARROSSEL PRODUTOS
// ===============================

function scrollProdutos(direcao) {
    const container = document.getElementById("carrosel-p");
    const larguraCard = container.querySelector(".produto").offsetWidth;

    container.scrollBy({
        left: direcao * (larguraCard + 30),
        behavior: "smooth"
    });
}

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