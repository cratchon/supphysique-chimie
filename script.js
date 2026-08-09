// Marque le lien de navigation actif selon la page courante
document.addEventListener("DOMContentLoaded", () => {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});
