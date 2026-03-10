// Script JavaScript pour le portfolio
// Fonction pour remonter tous en haut de la page

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animation de défilement fluide
    });
}

function openModal(id){
  document.getElementById(id).style.display = "flex";
}

function closeModal(id){
  document.getElementById(id).style.display = "none";
}