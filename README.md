
# Groupomania 🌐

## Sommaire

- [Fonctionnalités](#fonctionnalités)
  - [Gestion des utilisateurs](#-gestion-des-utilisateurs)
  - [Publications](#-publications)
  - [Commentaires](#-commentaires)
  - [Likes](#️-likes)
- [Technologies utilisées](#technologies-utilisées)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Base de données](#base-de-données)
- [Installation du projet](#installation-du-projet)
  - [Prérequis](#prérequis)
  - [Cloner le projet](#cloner-le-projet)
  - [Backend](#backend-1)
  - [Frontend](#frontend-1)
- [Utilisation](#utilisation)
- [Production](#production)
- [Tests](#tests)
- [Structure du projet](#structure-du-projet)
- [API](#api)
- [Sécurité](#sécurité)
- [Contexte et évolution du projet](#contexte-et-évolution-du-projet)
- [Perspectives d'évolution](#perspectives-dévolution)

Application web de type réseau social développée dans le cadre de ma formation de Développeuse Web.

Le projet est composé de :

- un frontend développé avec React ;
- un backend développé avec Node.js et Express ;
- une base de données MongoDB.

## Fonctionnalités

### 👤 Gestion des utilisateurs

- Inscription
- Connexion
- Validation des informations utilisateur
- Hashage des mots de passe avec bcrypt
- Authentification avec JWT
- Consultation des informations utilisateur
- Modification du profil
- Modification de la photo de profil
- Suppression d'un compte

### 📝 Publications

- Création de publications
- Consultation des publications
- Modification des publications
- Suppression des publications
- Ajout d'images aux publications

### 💬 Commentaires

- Création de commentaires
- Modification de commentaires
- Suppression de commentaires

### ❤️ Likes

- Ajouter un like à une publication
- Retirer un like
- Association des likes entre utilisateurs et publications

## Technologies utilisées

### Frontend

- React 18
- React Router
- Redux
- Redux Toolkit
- Redux Thunk
- Axios
- Sass
- Font Awesome
- React Testing Library

### Backend

- Node.js
- Express
- JavaScript
- Multer
- dotenv
- bcrypt
- JSON Web Token (JWT)

### Base de données

- MongoDB
- Mongoose

---

# Installation du projet

## Prérequis

Avant de commencer, installer :

- Node.js
- npm
- MongoDB ou un compte MongoDB Atlas
- Git

## Cloner le projet

```bash
git clone git@github.com:nadine35/P7_gropomania_Nadine_Zeganadin_14_07_22.git
```

Puis :

```bash
cd P7_gropomania_Nadine_Zeganadin_14_07_22
```

Le projet contient deux parties :

```text
P7_gropomania_Nadine_Zeganadin_14_07_22/
├── back/
└── front/
```

---

# Backend

## Installation

Se placer dans le dossier `back` :

```bash
cd back
```

Installer les dépendances :

```bash
npm install
```

## Configuration de MongoDB et JWT

Créer un fichier `.env` dans le dossier `back`.

Exemple :

```env
DB_USER=votre_utilisateur_mongodb
DB_PASSWORD=votre_mot_de_passe_mongodb
DB_HOST=votre_adresse_mongodb
JWT_SIGN_SECRET=votre_secret_jwt
```

Remplacer les valeurs par celles correspondant à votre environnement.

⚠️ Le fichier `.env` contient des informations sensibles et ne doit pas être publié sur GitHub.

## Lancement du backend

Depuis le dossier `back` :

```bash
npm start
```

Le backend utilise le port :

```text
http://localhost:3000
```

Lorsque la connexion fonctionne, le terminal affiche notamment :

```text
Listening on port 3000
Connexion à MongoDB réussie !
```

---

# Frontend

## Installation

Ouvrir un autre terminal et se placer dans le dossier `front` :

```bash
cd front
```

Installer les dépendances :

```bash
npm install
```

## Configuration

Créer un fichier `.env` dans le dossier `front`.

Exemple :

```env
PORT=3001
REACT_APP_API_URL=http://localhost:3000/
```

Le frontend communique avec le backend grâce à cette URL.

## Lancement du frontend

Depuis le dossier `front` :

```bash
npm start
```

L'application React est accessible à :

```text
http://localhost:3001
```

---

# Utilisation

Pour utiliser l'application en développement, lancer le backend et le frontend dans deux terminaux différents.

### Terminal 1 — Backend

```bash
cd back
npm start
```

Backend :

```text
http://localhost:3000
```

### Terminal 2 — Frontend

```bash
cd front
npm start
```

Frontend :

```text
http://localhost:3001
```

---

# Production

Pour générer une version optimisée du frontend :

```bash
npm run build
```

Cette commande génère une version de production de l'application React.

---

# Tests

Les tests peuvent être lancés avec :

```bash
npm test
```

---

# Structure du projet

```text
P7_gropomania_Nadine_Zeganadin_14_07_22/
│
├── back/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── images/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── front/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# API

Le backend expose notamment les routes d'authentification :

```text
POST   /api/auth/signup
POST   /api/auth/login
GET    /api/auth
GET    /api/auth/:id
PUT    /api/auth/:id
DELETE /api/auth/:id
```

Les routes liées aux publications sont accessibles sous :

```text
/api/post
```

Les images sont servies depuis :

```text
/images
```

---

# Sécurité

- Les mots de passe des utilisateurs sont hashés avec bcrypt.
- L'authentification est gérée avec des tokens JWT.
- Les identifiants MongoDB sont stockés dans des variables d'environnement.
- La clé secrète JWT est stockée dans une variable d'environnement.
- Les fichiers `.env` sont exclus du dépôt Git grâce au `.gitignore`.

---

# Contexte et évolution du projet

Ce projet a été initialement réalisé en 2022 dans le cadre de ma formation de Développeuse Web.

En 2026, j'ai choisi de reprendre et de remanier l'ensemble du projet afin de le remettre en état de fonctionnement et de consolider mes compétences en développement fullstack.

J'ai notamment travaillé sur :

- la remise en fonctionnement du backend et du frontend ;
- la reconnexion et la configuration de MongoDB Atlas ;
- la correction et l'amélioration de l'inscription et de la connexion ;
- la gestion de l'authentification avec JWT ;
- la sécurisation des mots de passe avec bcrypt ;
- la gestion et la validation des données utilisateur ;
- la gestion de l'upload et de la modification des photos de profil ;
- la gestion des images avec Multer ;
- la communication entre le frontend React et l'API Node.js/Express ;
- la correction de différents problèmes liés à l'ancienne version du projet ;
- la mise à jour de la documentation du projet ;
- la mise en place d'un `.gitignore` adapté afin de protéger les fichiers contenant des informations sensibles.

Cette reprise m'a permis de consolider mes connaissances en React, Redux, Node.js, Express, MongoDB, API REST, authentification et gestion des fichiers.

Le projet constitue aujourd'hui une version remise à jour d'un travail réalisé en 2022 et témoigne de mon évolution dans le développement web fullstack.

## Perspectives d'évolution

Je souhaite poursuivre le développement de ce projet en le faisant évoluer progressivement vers une application dédiée à la conservation et à la transmission de la mémoire familiale.

Les futures évolutions pourront notamment inclure :

- la création d'un arbre généalogique ;
- la gestion d'albums photos ;
- une chronologie des événements familiaux ;
- la rédaction et le partage de récits et d'anecdotes ;
- la gestion des relations entre les membres d'une famille ;
- la gestion des droits d'accès aux informations.

Ces fonctionnalités constituent une feuille de route pour les prochaines évolutions du projet.








