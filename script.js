document.addEventListener("DOMContentLoaded", () => {
    // Petit effet d'apparition au chargement
    document.body.classList.add("loaded");

    // Ferme automatiquement le menu mobile si nécessaire
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", () => {
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
