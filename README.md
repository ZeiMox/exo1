# 🎈 Jeu de Fléchettes Génératif — p5.js

## 🎯 Description du projet

Ce projet est un mini-dispositif interactif développé avec la librairie **p5.js**. Inspiré par l'idée d'une flèche téléguidée, l'utilisateur contrôle une fléchette avec sa souris pour éclater des ballons générés aléatoirement.

L'intention principale est de créer une expérience ludique et visuellement satisfaisante, rappelant l'ambiance joyeuse d'une fête foraine.

## ✨ Fonctionnalités principales

- **Génération procédurale :** À chaque lancement, une palette de couleurs est sélectionnée au hasard. Les 5 ballons sont générés avec une position, une taille, une vitesse et une couleur uniques.
- **Mouvement et Physique :** Les ballons flottent en continu et rebondissent de manière autonome sur les bords de la fenêtre du navigateur.
- **Interaction en temps réel :** L'utilisateur dirige une fléchette dessinée sur mesure, dont la pointe suit exactement le curseur de la souris.
- **Système de Collision (Hitbox) :** Détection de l'impact entre la pointe de la fléchette et les ballons, avec une légère marge de tolérance (+10px) pour un meilleur confort de jeu (_game feel_).
- **Particules et Feedback visuel :** Lorsqu'un ballon est touché, il explose en projetant des dizaines de particules colorées (système de particules avec gravité et réduction de taille), puis réapparaît instantanément avec de nouvelles propriétés.

## 🛠️ Technologies utilisées

- **p5.js** (Dessin sur Canvas, mathématiques, gestion de la souris, système de particules)
- **HTML5 / CSS3** (Structure de base et mise en page plein écran)

## 🚀 Comment lancer le projet

1. Assurez-vous d'avoir les fichiers `index.html`, `sketch.js` et `style.css` dans le même dossier.
2. Ouvrez simplement le fichier `index.html` dans un navigateur web moderne (Chrome, Firefox, Safari, Edge).
3. Bougez la souris pour diriger la flèche et éclater les ballons à l'écran !

## 🧠 Concepts techniques explorés

- **Structures de données :** Utilisation de Tableaux (`Array`) et d'Objets (`{}`) pour stocker et manipuler de multiples éléments simultanément (ballons, particules, palettes).
- **Algorithmique & Boucles :** Utilisation intensive de boucles `for` pour l'affichage et la mise à jour des éléments à chaque frame.
- **Mathématiques & Physique 2D :** \* Calculs de distance euclidienne (`dist()`) pour les collisions.
  - Gestion de vecteurs simples (vitesse X et Y) pour le déplacement autonome.
  - Inversion des valeurs (multiplication par -1) pour la logique de rebond sur les bordures.
- **Repère Spatial (Matrice) :** Utilisation de `push()`, `pop()` et `translate()` pour décaler le point d'origine `(0,0)` sur le curseur, facilitant le dessin complexe de la fléchette.
- **Game Design :** Mise en place d'une "hitbox" permissive (tolérance de pixels) pour rendre l'interaction plus fluide et gratifiante pour l'utilisateur.
