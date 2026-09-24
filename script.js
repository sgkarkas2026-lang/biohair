// ===== Бургер-меню для мобильной версии =====
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {
    burger.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    // Закрыть меню при клике на ссылку
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });
}

// ===== Плавная прокрутка для якорей =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
