// --- CONSTANTES GLOBALES ---
const NBR_BALLONS = 5;
const NBR_PARTICULES = 15;

// --- VARIABLES GLOBALES ---
let ballons = [];
let particules = [];
let palette = [];
let flechette;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generatePalette();

  flechette = new Flechette();

  for (let i = 0; i < NBR_BALLONS; i++) {
    ballons.push(new Ballon());
  }
}

function draw() {
  background(255);

  // --- GESTION DES PARTICULES ---
  // On lit le tableau à l'envers pour supprimer les particules mortes sans faire planter la boucle
  for (let i = particules.length - 1; i >= 0; i--) {
    let p = particules[i];
    p.deplacer();
    p.afficher();

    if (p.estMorte()) {
      particules.splice(i, 1); // On retire la particule de la mémoire
    }
  }

  // --- GESTION DES BALLONS ---
  for (let i = 0; i < ballons.length; i++) {
    let b = ballons[i];

    b.deplacer();
    b.afficher();

    // --- GESTION DE LA COLLISION ---
    // On demande à la fléchette où se trouve sa pointe
    let d = dist(flechette.getPointeX(), flechette.getPointeY(), b.x, b.y);

    // Si la distance est plus petite que le rayon + le bonus de tolérance (10px)
    if (d < b.rayon + 10) {
      // Explosion : on crée des particules
      for (let j = 0; j < NBR_PARTICULES; j++) {
        particules.push(new Particule(b.x, b.y, b.couleur));
      }

      // On ordonne au ballon de renaître
      b.reinitialiser();
    }
  }

  // --- DESSIN DE LA FLÈCHE ---
  flechette.afficher();
}

function generatePalette() {
  const palettes = [
    ["#E63946", "#F1FAEE", "#A8DADC", "#457B9D", "#1D3557"],
    ["#FF6B6B", "#FFE66D", "#4472CA", "#4ECDC4", "#C7F464"],
  ];
  palette = random(palettes);
  console.log("palette active : " + palette);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
