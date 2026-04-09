let ballons = [];
let palette = [];
let particules = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  generatePalette();

  // 2. On utilise une boucle pour créer 5 ballons
  for (let i = 0; i < 5; i++) {
    ballons.push({
      x: random(width),
      y: random(height),
      rayon: random(20, 80), // Taille aléatoire fixe pour chaque ballon
      couleur: random(palette), // On fixe la couleur à la création pour eviter d'avoir des changmements à chaque frame
      vitesseX: random(-2, 2),
      vitesseY: random(-2, 2),
    });
  }
}

function draw() {
  background(255);

  // --- GESTION DES BALLONS ---
  for (let i = 0; i < ballons.length; i++) {
    let b = ballons[i];

    b.x = b.x + b.vitesseX;
    b.y = b.y + b.vitesseY;

    // 2. AJOUT : Rebondir sur les murs pour ne pas disparaître
    if (b.x - b.rayon < 0 || b.x + b.rayon > width) {
      b.vitesseX = b.vitesseX * -1; // Inverser la direction horizontale pour faire l'effet de rebond
    }
    if (b.y - b.rayon < 0 || b.y + b.rayon > height) {
      b.vitesseY = b.vitesseY * -1; // Inverser la direction verticale
    }

    fill(b.couleur);
    noStroke();
    circle(b.x, b.y, b.rayon * 2);

    // --- GESTION DE LA COLLISION ---
    let pointeX = mouseX;
    let pointeY = mouseY - 35; // pointe de la flèche

    let d = dist(pointeX, pointeY, b.x, b.y);

    // Si la distance est plus petite que le rayon, ça touche
    if (d < b.rayon + 10) {
      //10 pour rajouter un bonus dans la zone de collision

      // Structure de la boucle d'animation des particules
      for (let j = 0; j < 15; j++) {
        particules.push({
          x: b.x, // Elles partent du centre du ballon touché
          y: b.y,
          vitesseX: random(-5, 5), // Elles giclent fort
          vitesseY: random(-5, 5),
          taille: random(5, 15),
          couleur: b.couleur,
        });
      }
      b.x = random(width);
      b.y = random(height);
      b.couleur = random(palette); // Nouvelle couleur à l'explosion
      b.rayon = random(20, 80);
    }
    for (let i = 0; i < particules.length; i++) {
      let p = particules[i];
      if (p.taille > 0) {
        // sécurité pour ne pas afficher les particules disparues
        p.x = p.x + p.vitesseX;
        p.y = p.y + p.vitesseY;
        p.taille = p.taille - 0.5; // La particule fond

        fill(p.couleur);
        noStroke();
        circle(p.x, p.y, p.taille);
      }
    }
  }

  // --- DESSIN DE LA FLÈCHE (VERTICALE) ---
  push(); // Sauvegarde les réglages de dessin
  translate(mouseX, mouseY); // Place le point (0,0) sur la souris

  stroke(50);
  strokeWeight(4);
  line(0, 15, 0, 55);

  // Les plumes à l'arrière
  fill(200, 0, 0);
  noStroke();
  triangle(0, 55, -10, 65, 0, 60);
  triangle(0, 55, 10, 65, 0, 60);

  // La pointe de la flèche
  fill(100);
  triangle(-8, 15, 8, 15, 0, 0);

  pop(); // Restaure les réglages normaux pour ne pas casser le reste
}

function generatePalette() {
  const palettes = [
    ["#E63946", "#F1FAEE", "#A8DADC", "#457B9D", "#1D3557"],
    ["#FF6B6B", "#FFE66D", "#4472CA", "#4ECDC4", "#C7F464"],
  ];
  palette = random(palettes); // choisi une palette au hasard
  console.log("palette active : " + palette);
}
