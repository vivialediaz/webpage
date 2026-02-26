function setLanguage(lang) {
    document.querySelectorAll("[data-es]").forEach(el => {
        el.textContent = el.getAttribute("data-" + lang);
    });
}

window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
});
