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

## 🤖 Usage de l'IA dans la conception (Tuteur & Pair-Programming)

Afin de respecter l'intention pédagogique du projet, l'Intelligence Artificielle n'a **pas** été utilisée pour écrire le code à ma place de A à Z. Elle a été configurée pour agir comme un assistant d'apprentissage et de débogage.

**1. Le Prompt d'initialisation (Cadrage strict) :**
Pour m'assurer que l'IA ne me donne pas la solution complète dès le départ, j'ai démarré la session avec cette consigne issue de ma fiche de spécification :

> _"Voici mes spécifications. Ne génère pas le code final. Aide-moi à coder étape par étape en m'expliquant chaque fonction p5.js dont j'ai besoin. Commence par la section Canvas."_
> L'IA a tenu son rôle de tutrice (refusant même de me donner le code complet quand je le demandais !), ce qui m'a obligé à écrire moi-même la structure des tableaux (`Array`) et des boucles.

**2. Brainstorming et Game Design :**
En phase de conception, j'ai utilisé l'IA pour évaluer la faisabilité technique de mes idées. Nous avons débattu entre un tir au clic (plus facile) ou une flèche mobile type "Hawkeye" (plus interactif). L'IA m'a orienté vers l'utilisation de `mouseX` et `mouseY` pour un meilleur compromis temps/résultat.

**3. Débogage ciblé et résolution de problèmes :**
Face aux inévitables bugs (comme un crash écran blanc), je soumettais les erreurs de la console (ex: `[object Arguments] is not a valid color representation`). Au lieu de me donner la ligne corrigée, l'IA m'a expliqué la logique de **chronologie** en JavaScript : ma boucle de ballons cherchait à piocher une couleur _avant_ que la fonction `generatePalette()` n'ait rempli le tableau.

**4. Amélioration de l'expérience utilisateur (Game Feel) :**
C'est à travers nos échanges que des détails cruciaux ont été ajoutés pour peaufiner le jeu :

- **La Hitbox :** Face à la difficulté de toucher les petits ballons, l'IA m'a expliqué ce concept classique de jeu vidéo. Nous avons ajouté une tolérance mathématique (`dist < b.rayon + 10`) pour rendre la visée plus permissive et satisfaisante.
- **Le feedback visuel :** L'IA m'a guidé sur la logique mathématique pour créer de toutes pièces un système de particules (position de départ, vélocité, réduction de taille) afin de simuler une vraie explosion au moment de la collision.
