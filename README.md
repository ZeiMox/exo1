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

## 🛠️ Technologies & Architecture

- **p5.js** (Dessin sur Canvas, mathématiques, gestion de la souris, système de particules)
- **Architecture Modulaire Orientée Objet (POO) :** Le code est découpé de manière professionnelle en plusieurs fichiers (Classes `Ballon`, `Particule`, `Flechette`) pour séparer la logique (Principe de Responsabilité Unique) et rendre le code principal (`sketch.js`) clair et maintenable.

## 🚀 Comment lancer le projet

1. Assurez-vous d'avoir tous les fichiers (`index.html`, `style.css`, `sketch.js`, `Ballon.js`, `Particule.js`, `Flechette.js`) dans le même dossier.
2. Ouvrez simplement le fichier `index.html` dans un navigateur web moderne (Chrome, Firefox, Safari, Edge).
3. Bougez la souris pour diriger la flèche et éclater les ballons à l'écran !

## 🧠 Concepts techniques explorés

- **Programmation Orientée Objet (POO) :** Création de classes pour encapsuler les propriétés (taille, vitesse, couleur) et les méthodes (déplacer, afficher) des entités du jeu.
- **Structures de données :** Utilisation de Tableaux (`Array`) pour gérer le cycle de vie de multiples éléments simultanément.
- **Mathématiques & Physique 2D :** \* Calculs de distance euclidienne (`dist()`) pour les collisions.
  - Gestion de vecteurs simples (vitesse X et Y) pour le déplacement autonome.
  - Inversion des valeurs (multiplication par -1) pour la logique de rebond sur les bordures.
- **Repère Spatial (Matrice) :** Utilisation de `push()`, `pop()` et `translate()` pour décaler le point d'origine `(0,0)` sur le curseur, facilitant le dessin complexe de la fléchette.
- **Game Design :** Mise en place d'une "hitbox" permissive (tolérance de pixels) pour rendre l'interaction plus fluide et gratifiante pour l'utilisateur.

## 🤖 Usage de l'IA dans la conception (Tuteur & Pair-Programming)

Afin de respecter l'intention pédagogique du projet, l'Intelligence Artificielle n'a **pas** été utilisée pour écrire le code à ma place de A à Z. Elle a été configurée pour agir comme un assistant d'apprentissage et de débogage.

**1. Le Prompt d'initialisation (Cadrage strict) :**
Pour m'assurer que l'IA ne me donne pas la solution complète dès le départ, j'ai démarré la session avec cette consigne issue de ma fiche de spécification :

> _"Voici mes spécifications. Ne génère pas le code final. Aide-moi à coder étape par étape en m'expliquant chaque fonction p5.js dont j'ai besoin. Commence par la section Canvas."_
> L'IA a tenu son rôle de tutrice, ce qui m'a obligé à écrire moi-même la structure de base.

**2. Brainstorming et Game Design :**
En phase de conception, j'ai utilisé l'IA pour évaluer la faisabilité technique de mes idées. Nous avons débattu entre un tir au clic (plus facile) ou une flèche mobile type "Hawkeye" (plus interactif). L'IA m'a orienté vers l'utilisation de `mouseX` et `mouseY` pour un meilleur compromis temps/résultat.

**3. Débogage ciblé et résolution de problèmes :**
Face aux inévitables bugs (comme un crash écran blanc dû à l'erreur `[object Arguments] is not a valid color representation`), l'IA m'a expliqué la logique de **chronologie** en JavaScript, m'aidant à comprendre l'ordre correct d'exécution des fonctions dans le `setup()`.

**4. Amélioration de l'expérience utilisateur (Game Feel) :**
C'est à travers nos échanges que des détails cruciaux ont été ajoutés pour peaufiner le jeu :

- **La Hitbox :** Face à la difficulté de toucher les petits ballons, l'IA m'a expliqué ce concept classique de jeu vidéo. Nous avons ajouté une tolérance mathématique (`dist < b.rayon + 10`) pour rendre la visée plus permissive.
- **Le feedback visuel :** L'IA m'a guidé sur la logique mathématique pour créer un système de particules complet afin de simuler une vraie explosion au moment de la collision.
- **L'Architecture :** Refonte finale du code monolithique vers une architecture modulaire en POO.
