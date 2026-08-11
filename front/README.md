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


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
