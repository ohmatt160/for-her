// Back to Top
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
    backToTopBtn.style.display =
        window.scrollY > 20 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Collapsibles
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((btn) => {
    btn.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});