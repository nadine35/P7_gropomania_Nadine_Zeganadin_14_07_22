
Gropomania 🌐

Application web de type réseau social développée dans le cadre de ma formation en développement web.

Le projet est composé d'un frontend React et d'un backend Node.js / Express, avec une base de données MongoDB.

Fonctionnalités

👤 Gestion des utilisateurs

- Inscription
- Connexion
- Validation des informations utilisateur
- Hashage des mots de passe avec bcrypt
- Authentification avec JWT
- Consultation des informations utilisateur
- Modification du profil
- Suppression d'un compte

📝 Publications

- Création de publications
- Consultation des publications
- Modification des publications
- Suppression des publications
- Ajout d'images aux publications

💬 Commentaires

- Création de commentaires
- Modification de commentaires
- Suppression de commentaires

❤️ Likes

- Ajouter un like à une publication
- Retirer un like
- Association des likes entre utilisateurs et publications

Technologies

Frontend

- React 18
- React Router
- Redux
- Redux Toolkit
- Redux Thunk
- Axios
- Sass
- Font Awesome
- React Testing Library

Backend

- Node.js
- Express
- JavaScript
- API REST

Base de données

- MongoDB
- Mongoose

Authentification

- JSON Web Token (JWT)
- bcrypt

Configuration

Les informations sensibles ne sont pas versionnées dans Git.

Un fichier ".env" doit être créé à la racine du backend pour configurer la connexion à MongoDB et la signature des tokens JWT.

Exemple :

DB_HOST=x
DB_USER=x
DB_PASSWORD=x
JWT_SIGN_SECRET=x

Les valeurs doivent être remplacées par celles correspondant à l'environnement de développement.

Installation du backend

Installer les dépendances :

npm install

Lancement du backend

En ligne de commande :

nodemon server

ou :

npm run server

Installation du frontend

Installer les dépendances :

npm install

Développement

Lancer l'application React en mode développement :

npm start

Production

Compiler l'application :

npm run build

Tests

Lancer les tests :

npm test

Contexte

Projet réalisé dans le cadre de ma formation de Développeuse Web.

Ce projet m'a permis de mettre en pratique le développement d'une application web fullstack avec React, Node.js / Express et MongoDB, ainsi que la gestion d'une API REST, l'authentification avec JWT et le hashage des mots de passe avec bcrypt.

Il constitue une étape de mon parcours vers le développement logiciel fullstack.
















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




