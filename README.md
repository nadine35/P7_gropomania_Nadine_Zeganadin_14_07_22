
# Groupomania 🌐

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
│   ├── package.json
│   └── .env                 # non versionné
│
├── front/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env                 # non versionné
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

# Contexte du projet

Projet réalisé dans le cadre de ma formation de Développeuse Web.

Ce projet m'a permis de mettre en pratique le développement d'une application web fullstack avec React, Node.js, Express et MongoDB.

J'ai notamment travaillé sur :

- la création d'une API REST ;
- la gestion d'une base de données MongoDB ;
- l'authentification des utilisateurs ;
- la sécurisation des mots de passe ;
- la gestion des publications ;
- la gestion des commentaires ;
- la gestion des likes ;
- la gestion des images ;
- la modification de la photo de profil ;
- la communication entre un frontend React et un backend Node.js.

Ce projet constitue une étape de mon parcours vers le développement logiciel fullstack.














# P7_gropomania_Nadine_Zeganadin_14_07_22

# reseau-social-app backend

### Project setup
npm install


### Configuration connexion base de donnée
Veuillez créer votre fichier .env dans votre dossier racine du projet pour vous connecter à votre base de données mongodb
Ajouter un code pour la signature du token.

Exemple de mon fichier .env à modifier, remplacer les x par vos valeurs :

DB_HOST=x
DB_USER=x
DB_PASSWORD=x
JWT_SIGN_SECRET=x

### Execution du code
En ligne de commande faire : 

nodemon server OU npm run server

---------------------------------------------------------------------------------------------------------

# reseau-social-app frontend

## Project setup
npm install


### Compiles and hot-reloads for development
npm run serve


### Compiles and minifies for production
npm run build


### Lints and fixes files
npm run lint




