// =============================================
// CRITÉRIO 05 – Menu com JavaScript
// CRITÉRIO 06 – Menu hamburger responsivo
// =============================================

document.addEventListener("DOMContentLoaded", function () {
  // --- Hamburger ---
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      const aberto = navLinks.classList.toggle("aberto");
      hamburger.setAttribute("aria-expanded", aberto);
      hamburger.textContent = aberto ? "✕" : "☰";
    });

    // Fecha o menu ao clicar em qualquer link
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("aberto");
        hamburger.textContent = "☰";
        hamburger.setAttribute("aria-expanded", false);
      });
    });
  }

  // --- Marca o link ativo conforme a página atual ---
  const paginaAtual = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    const href = link.getAttribute("href").split("/").pop();
    if (href === paginaAtual || (paginaAtual === "" && href === "index.html")) {
      link.classList.add("ativo");
    }
  });
});
