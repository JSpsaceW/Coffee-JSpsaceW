# oCoffee

## Description du projet

oCoffee est un site vitrine conçu pour mettre en avant un projet autour du café. Ce projet présente des éléments interactifs, des fiches produits, et une interface utilisateur épurée. Il vise à offrir une expérience utilisateur fluide tout en affichant du contenu de qualité sur le thème du café.

## Technologies utilisées

Ce projet est développé en utilisant plusieurs technologies modernes pour la construction de sites web dynamiques :

- **Express.js** : Framework backend pour construire le serveur.
- **EJS (Embedded JavaScript)** : Utilisé comme moteur de templates pour générer des vues dynamiques côté serveur.
- **Node.js** : Pour exécuter JavaScript côté serveur.
- **PostgreSQL** : Base de données relationnelle utilisée pour stocker les informations.
- **dotenv** : Pour la gestion des variables d'environnement, assurant la sécurité et la configuration flexible.
- **Nodemon** : Pour le rechargement automatique du serveur pendant le développement.
- **ESLint** : Pour le linting et l'amélioration de la qualité du code.

## Installation

1. Clonez ce dépôt sur votre machine locale.

2. Accédez au dossier du projet.

3. Installez les dépendances du projet via un gestionnaire de paquets tel que npm.

4. Configurez les variables d'environnement dans un fichier `.env`.

5. Démarrez le serveur de développement.

## Fonctionnalités

- Affichage dynamique des fiches produits avec des informations sur chaque article.
- Mise en page responsive adaptée à différents écrans.
- Interaction utilisateur simplifiée avec des pages générées dynamiquement grâce à EJS.
- Possibilité de personnaliser et étendre le contenu facilement.

## Structure du projet

- **`index.js`** : Point d'entrée du serveur Node.js.
- **Vues (`views/`)** : Les fichiers EJS pour la génération des pages.
- **Public (`public/`)** : Contient les fichiers statiques tels que les images et les fichiers CSS.
