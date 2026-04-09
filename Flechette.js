class Flechette {
  constructor() {
    // Les propriétés de la fléchette pourraient aller ici
  }

  getPointeX() {
    return mouseX;
  }

  getPointeY() {
    return mouseY - 35; // Pointe de la flèche décalée
  }

  afficher() {
    push(); // Sauvegarde les réglages de dessin
    translate(mouseX, mouseY); // Place le point (0,0) sur la souris

    // La tige
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

    pop(); // Restaure les réglages normaux
  }
}
