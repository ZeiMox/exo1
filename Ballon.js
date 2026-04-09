class Ballon {
  constructor() {
    this.reinitialiser(); // Dès sa naissance, le ballon se génère
  }

  // Fonction interne pour réinitialiser le ballon (au début ou après explosion)
  reinitialiser() {
    this.rayon = random(20, 80); // Taille aléatoire fixe pour chaque ballon

    this.x = random(this.rayon, width - this.rayon); // Position aléatoire en évitant les bords
    this.y = random(this.rayon, height - this.rayon);

    this.couleur = random(palette); // On fixe la couleur
    this.vitesseX = random(-2, 2);
    this.vitesseY = random(-2, 2);
  }

  deplacer() {
    this.x += this.vitesseX;
    this.y += this.vitesseY;

    // Rebondir sur les murs pour ne pas disparaître
    if (this.x - this.rayon < 0 || this.x + this.rayon > width) {
      this.vitesseX *= -1; // Inverser la direction horizontale
    }
    if (this.y - this.rayon < 0 || this.y + this.rayon > height) {
      this.vitesseY *= -1; // Inverser la direction verticale
    }
  }

  afficher() {
    fill(this.couleur);
    noStroke();
    ellipse(this.x, this.y, this.rayon * 2, this.rayon * 2.6); // Ovale pour les ballons

    triangle(
      this.x,
      this.y + this.rayon * 1.3,
      this.x - 8,
      this.y + this.rayon * 1.3 + 12,
      this.x + 8,
      this.y + this.rayon * 1.3 + 12,
    );
  }
}
