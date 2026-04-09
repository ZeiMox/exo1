class Particule {
  constructor(departX, departY, couleurInitiale) {
    this.x = departX; // Elles partent du centre du ballon touché
    this.y = departY;
    this.vitesseX = random(-5, 5); // Elles giclent fort
    this.vitesseY = random(-5, 5);
    this.taille = random(5, 15);
    this.couleur = couleurInitiale;
  }

  deplacer() {
    this.x += this.vitesseX;
    this.y += this.vitesseY;
    this.taille -= 0.5; // La particule fond
  }

  afficher() {
    fill(this.couleur);
    noStroke();
    circle(this.x, this.y, this.taille);
  }

  estMorte() {
    return this.taille <= 0; // Renvoie "vrai" si la particule a totalement fondu
  }
}
