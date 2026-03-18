document.addEventListener("DOMContentLoaded", () => {

// ===============================
// DROPDOWN USUÁRIO
// ===============================

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
// MENU LATERAL
// ===============================

const items = document.querySelectorAll(".sidebar-menu li");

items.forEach(item => {
    item.addEventListener("click", () => {
        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});


// ===============================
// CARRINHO
// ===============================

const abrirCarrinho = document.getElementById("abrirCarrinho");
const carrinho = document.getElementById("carrinho");
const fecharCarrinho = document.getElementById("fecharCarrinho");
const continuarComprando = document.getElementById("continuarComprando");

abrirCarrinho.addEventListener("click", () => {
    carrinho.classList.add("ativo");
});

fecharCarrinho.addEventListener("click", () => {
    carrinho.classList.remove("ativo");
});

document.addEventListener("click", (e) => {
    if (!carrinho.contains(e.target) && !abrirCarrinho.contains(e.target)) {
        carrinho.classList.remove("ativo");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        carrinho.classList.remove("ativo");
    }
});

continuarComprando.addEventListener("click", () => {
    carrinho.classList.remove("ativo");
});

});