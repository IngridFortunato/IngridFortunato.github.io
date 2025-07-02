// Animações simples ao rolar a página
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("section");
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

// Inicialização dos elementos
document.querySelectorAll("section").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.6s ease-out";
});