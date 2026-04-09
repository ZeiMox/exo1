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

### i. Parties pour lesquelles j'ai utilisé une IA

L'Intelligence Artificielle a été utilisée comme un tuteur de "pair-programming" pour :

- **La logique algorithmique :** Calcul des rebonds et gestion des listes d'objets (ballons et particules).
- **Le débogage :** Compréhension des erreurs de chronologie dans le `setup()` et les problèmes de formats de couleurs.
- **L'optimisation du Game Feel :** Concept de la hitbox élargie et calcul mathématique de l'explosion.
- **La structure :** Refactorisation du code vers une architecture Orientée Objet (fichiers séparés).

### ii. Prompt utilisé

Dès le début, j'ai imposé un cadre strict pour ne pas que l'IA code à ma place :

> _"Voici mes spécifications. Ne génère pas le code final. Aide-moi à coder étape par étape en m'expliquant chaque fonction p5.js dont j'ai besoin. Commence par la section Canvas."_

### iii. Modifications que j'ai apportées

Bien que guidé par l'IA, j'ai pris toutes les décisions finales et effectué les ajustements suivants :

- **Design visuel :** J'ai entièrement dessiné la fléchette (coordonnées des lignes et triangles) pour qu'elle corresponde à mon idée.
- **Équilibrage :** J'ai manuellement testé et fixé les plages de vitesse et de taille des ballons pour que le jeu ne soit ni trop lent, ni trop dur.
- **Décision de Gameplay :** J'ai choisi d'ajouter la tolérance de **10 pixels** à la collision après avoir constaté en testant que les petits ballons étaient frustrants à viser.
- **Documentation :** J'ai rédigé les commentaires explicatifs dans le code pour m'assurer de maîtriser la logique de chaque fonction.
