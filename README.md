# 🎈 Jeu de Fléchettes Génératif — p5.js

## 🎯 Description du projet

Ce projet est un mini-dispositif interactif développé avec la librairie **p5.js**. Inspiré par l'idée d'une flèche téléguidée, l'utilisateur contrôle une fléchette avec sa souris pour éclater des ballons générés aléatoirement.

L'intention principale est de créer une expérience ludique et visuellement satisfaisante, rappelant l'ambiance joyeuse d'une fête foraine.

## ✨ Fonctionnalités principales

- **Génération procédurale :** À chaque lancement, une palette de couleurs est sélectionnée au hasard. Les 5 ballons sont générés avec une position, une taille, une vitesse et une couleur uniques.
- **Mouvement et Physique :** Les ballons flottent en continu et rebondissent de manière autonome sur les bords de la fenêtre du navigateur.
- **Interaction en temps réel :** L'utilisateur dirige une fléchette dont la pointe suit exactement le curseur de la souris.
- **Système de Collision (Hitbox) :** Détection de l'impact avec une marge de tolérance (+10px) pour un meilleur confort de jeu.
- **Particules et Feedback visuel :** À l'impact, le ballon projette des particules colorées avant de réapparaître.

## 🛠️ Technologies & Architecture

- **p5.js** (Canvas, physique 2D, système de particules).
- **Architecture Modulaire (POO) :** Code découpé en classes (`Ballon`, `Particule`, `Flechette`) pour une meilleure clarté.

## 🚀 Comment lancer le projet

1. Assurez-vous d'avoir tous les fichiers (`index.html`, `style.css`, `sketch.js`, `Ballon.js`, `Particule.js`, `Flechette.js`) dans le même dossier.
2. Ouvrez le fichier **`index.html`** dans un navigateur web.

---

## 🤖 Traçabilité de l'usage de l'IA

### I. Parties pour lesquelles j'ai utilisé une IA

L'Intelligence Artificielle a été utilisée comme un dictionnaire interactif et un tuteur de "pair-programming" du code pour :

- **Génération de la base de code :** Création d'une première ébauche fonctionnelle en p5.js à partir de mes spécifications (variables, structure de la boucle principale).

* **L'apprentissage de la syntaxe :** Comprendre comment structurer mes tableaux (`Array`) et mes boucles dans l'environnement p5.js.
* **Le débogage :** M'aider à identifier des erreurs de chronologie dans l'initialisation de mes variables (ex: générer la palette avant de l'appeler).
* **L'optimisation du Game Feel :** Me conseiller sur la logique mathématique pour créer un effet d'explosion (système de particules).
* **L'architecture de fin de projet :** M'expliquer comment transformer le code procédural que j'avais écrit en une architecture Orientée Objet (fichiers séparés).

### II. Prompt utilisé

Dès le début, j'ai imposé un cadre strict pour ne pas que l'IA code à ma place :

> _"Voici mes spécifications. Ne génère pas le code final. Aide-moi à coder étape par étape en m'expliquant chaque fonction p5.js dont j'ai besoin. Commence par la section Canvas."_

### III. Mon travail d'écriture et les modifications apportées

Contrairement à une simple génération de code, j'ai été aux commandes de la rédaction. Voici mes apports réels :

- **Écriture du code source :** J'ai rédigé moi-même la structure initiale du jeu (boucles, variables, conditions de rebonds et fonctions principales `setup` / `draw`) en me basant sur les explications théoriques de l'IA.
- **Design visuel :** J'ai entièrement calculé et codé le dessin de la fléchette (coordonnées des lignes et triangles `translate`) pour qu'elle corresponde à mon idée.
- **Équilibrage :** J'ai manuellement testé et fixé les plages de vitesse et de taille des ballons pour que le jeu ne soit ni trop lent, ni trop dur.
- **Décision de Gameplay :** J'ai choisi d'ajouter une tolérance de **10 pixels** à la distance de collision, après avoir constaté en testant mon propre code que les petits ballons étaient frustrants à viser.
- **Documentation :** J'ai rédigé les commentaires explicatifs pour m'assurer de maîtriser la logique de chaque fonction avant de passer à l'architecture modulaire finale.
