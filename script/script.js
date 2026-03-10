// Script JavaScript pour le portfolio
// Fonction pour remonter tous en haut de la page

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animation de défilement fluide
    });
}

// modal functions
window.openModal = function(id){
  document.getElementById(id).style.display = "flex";
}

window.closeModal = function(id){
  document.getElementById(id).style.display = "none";
}