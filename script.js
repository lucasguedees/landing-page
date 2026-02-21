// ANIMAÇÕES DE SCROLL
const observer = new IntersectionObserver(entries => {
entries.forEach(e => {
if (e.isIntersecting) {
e.target.classList.add("show");
}
});
});

document.querySelectorAll(".animate").forEach(el => observer.observe(el));

// ACCORDION
document.querySelectorAll(".accordion-header").forEach(btn => {
btn.addEventListener("click", () => {
btn.parentElement.classList.toggle("active");
});
});