// Script JavaScript pour le portfolio
// Fonction pour remonter tout en haut de la page

function scrollToTop() {
  const depart = window.scrollY;       // position actuelle
  const duree = 1000;                  // durée en ms
  const debut = performance.now();     // heure de départ

  function animer(maintenant) {
    // progression de 0 à 1 (0 = début, 1 = arrivé en haut)
    const p = Math.min((maintenant - debut) / duree, 1);

    // déplace la page vers le haut
    window.scrollTo(0, depart * (1 - p));

    // continue jusqu'à p = 1
    if (p < 1) requestAnimationFrame(animer);
  }

  requestAnimationFrame(animer);
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


// code pour l'easter egg
const konamiCode = [
  "ArrowUp","ArrowUp",
  "ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight",
  "ArrowLeft","ArrowRight"
];

let index = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === konamiCode[index]) {
        index++;

        if (index === konamiCode.length) {

            // Image
            const img = document.getElementById("easterImg");
            img.style.display = "block";
            img.style.animation = "pop 0.25s ease";

            // 🔊 Screamer
            const audio = document.getElementById("screamer");
            audio.currentTime = 0; 
            audio.volume = 0.1;
            audio.play();

            // ⏱ Disparaît après 3 secondes
            setTimeout(() => {
                img.style.display = "none"; // cacher l'image
                audio.pause();              // couper le son
                audio.currentTime = 0;      // remettre au début
            }, 5000); // 5000 ms = 5 secondes

            index = 0;            
        }
    } else {
        index = 0;
    }
});

// code pour l'easter egg
const jack = [
  "l","o","i","c"
];

 let ind = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === jack[ind]) {
        ind++;

        if (ind === jack.length) {

            // Image
            const img = document.getElementById("easterImg2");
            img.style.display = "block";
            img.style.animation = "pop 0.25s ease";

            // 🔊 Meme Sound
            const audio = document.getElementById("memeSound");
            audio.currentTime = 0; 
            audio.volume = 1;
            audio.play();

            // ⏱ Disparaît après 3 secondes
            setTimeout(() => {
                img.style.display = "none"; // cacher l'image
                audio.pause();              // couper le son
                audio.currentTime = 0;      // remettre au début
            }, 4000); // 4000 ms = 4 secondes

            ind = 0;            
        }
    } else {
        ind = 0;
    }
});