class Ballon {
  constructor() {
    this.reinitialiser(); // Dès sa naissance, le ballon se génère
  }

  // Fonction interne pour réinitialiser le ballon (au début ou après explosion)
  reinitialiser() {
    this.x = random(width);
    this.y = random(height);
    this.rayon = random(20, 80); // Taille aléatoire fixe pour chaque ballon
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
    circle(this.x, this.y, this.rayon * 2);
  }
}
