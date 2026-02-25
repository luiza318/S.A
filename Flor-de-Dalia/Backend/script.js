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