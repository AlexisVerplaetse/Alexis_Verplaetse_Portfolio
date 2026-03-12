// Script JavaScript pour le portfolio
// Fonction pour remonter tout en haut de la page

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animation de défilement fluide
    });
}

// ── MODAL FUNCTIONS ─────────────────────

// ouvrir le modal
window.openModal = function(id){
  document.getElementById(id).style.display = "flex";
}

// fermer le modal
window.closeModal = function(id){
  document.getElementById(id).style.display = "none";
}


// fermer le modal si on clique en dehors
window.addEventListener("click", function(event) {
  const modals = document.querySelectorAll(".modal");

  modals.forEach(function(modal){
    if(event.target === modal){
      modal.style.display = "none";
    }
  });
});