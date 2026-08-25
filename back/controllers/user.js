const bcrypt = require('bcrypt');  // npm install --save bcrypt
const jwtUtils = require('../middleware/auth');
const User = require('../models/User');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;
exports.signup = (req, res, next) => {

    const user = {...req.body};

    if(user.email == null || user.pseudo == null || user.password == null) {
        return res.status(200).send({ 'error': 'un des champs est vide !' });
    }

    if(user.pseudo.length >=13 || user.pseudo.length <=4) {
        return res.status(200).send({ "error": "votre pseudo doit être compris entre 5 et 12 caractères" });
    }

    if(!EMAIL_REGEX.test(user.email)) {
        return res.status(200).send({ "error" : "votre email n'est pas valide" });
    }

    if(!PASSWORD_REGEX.test(user.password)) {
        return res.status(200).send({ "error": "votre password doit être compris entre 4 et 8 caractères et doit contenir un chiffre" });
    }
    
    // Vérifie pseudo length, mail regex, pass etc

    User.findOne({ email: req.body.email })
    .then(userFound => {
        if (!userFound) {
            bcrypt.hash(user.password, 5, function(err, bcryptedPassword) {
                const newUser = new User({
                    email: user.email,
                    pseudo: user.pseudo,
                    password: bcryptedPassword,
                    bio: user.bio,
                    isAdmin: 0
                });
                newUser.save()
                .then(() => res.status(200).json({ 'userId': newUser.id }))
                .catch(error => res.status(400).json({ error }))

            })
        } else {
            return res.status(400).json({ "error": "l'utilisateur existe déjà" });
        }
    })
    .catch(error => res.status(500).json({ error }));
};

// exports.login = (req, res , next) => {

//     // Params
//     const user = {...req.body};

//     if(user.email == null || user.password == null) {
//         return res.status(400).json({ 'error': 'un des champs est vide !' });
//     }

//     User.findOne({ email: req.body.email })
//     .then(function(userFound) {
//         if(userFound) {

//             bcrypt.compare(user.password, userFound.password, function(errBcrypt, resBcrypt) {
//                 if(resBcrypt) {
//                     return res.status(200).json({
//                         'userId': userFound.id,
//                         'token': jwtUtils.generateTokenForUser(userFound)
//                     })
//                 } else {
//                     return res.status(400).json({ 'error': 'password invalide' });
//                 }
//             });
//         } else {
//             return res.status(400).json({ "error": "l'utilisateur n'existe pas dans la base de donnée" });
//         }

//     })
//     // .catch(function(err) {
//     //     return res.status(500).json({ "error": "impossible de vérifier l'utilisateur" });
//     // })

//     .catch(function(err) {
//     console.error("Erreur login :", err);
//     return res.status(500).json({
//         error: "impossible de vérifier l'utilisateur",
//         details: err.message
//     });
// });
// };

exports.login = (req, res, next) => {

    console.log("=== LOGIN APPELÉ ===");
    console.log("Body reçu :", req.body);

    const user = { ...req.body };

    if (user.email == null || user.password == null) {
        console.log("Email ou password manquant");

        return res.status(400).json({
            error: "un des champs est vide !"
        });
    }

    console.log("Recherche utilisateur :", user.email);

    User.findOne({ email: req.body.email })
        .then(function(userFound) {

            console.log("Utilisateur trouvé :", !!userFound);

            if (userFound) {

                console.log("Comparaison du mot de passe...");

                bcrypt.compare(
                    user.password,
                    userFound.password,
                    function(errBcrypt, resBcrypt) {

                        console.log("Erreur bcrypt :", errBcrypt);
                        console.log("Résultat bcrypt :", resBcrypt);

                        if (resBcrypt) {

                            console.log("Mot de passe correct");

                            return res.status(200).json({
                                userId: userFound.id,
                                token: jwtUtils.generateTokenForUser(userFound)
                            });

                        } else {

                            console.log("Mot de passe incorrect");

                            return res.status(400).json({
                                error: "password invalide"
                            });
                        }
                    }
                );

            } else {

                console.log("Utilisateur introuvable");

                return res.status(400).json({
                    error: "l'utilisateur n'existe pas dans la base de donnée"
                });
            }
        })
        .catch(function(err) {

            console.error("ERREUR LOGIN :", err);

            return res.status(500).json({
                error: "impossible de vérifier l'utilisateur",
                details: err.message
            });
        });
};

// exports.upload = (req, res, next) => {
//     if (!req.file) {
//         return res.status(400).json({
//             error: "Aucun fichier reçu"
//         });
//     }

//     const picture = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;

//     User.updateOne(
//         { _id: req.body.userId },
//         { picture: picture }
//     )
//     .then(() => {
//         res.status(200).json({
//             message: "Image modifiée",
//             picture: picture
//         });
//     })
//     .catch(error => {
//         console.error("Erreur upload :", error);
//         res.status(500).json({ error });
//     });
// };

exports.upload = (req, res) => {
    console.log("=== UPLOAD ===");
    console.log("userId reçu :", req.body.userId);
    console.log("fichier reçu :", req.file);

    if (!req.file) {
        return res.status(400).json({
            error: "Aucun fichier reçu"
        });
    }

    const picture = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;

    User.updateOne(
        { _id: req.body.userId },
        { $set: { picture: picture } }
    )
    .then(async (result) => {
        console.log("=== RÉSULTAT UPDATE ===");
        console.log(result);

        // On relit immédiatement l'utilisateur
        const user = await User.findById(req.body.userId);

        console.log("=== UTILISATEUR APRÈS UPDATE ===");
        console.log(user);

        return res.status(200).json({
            message: "Image modifiée",
            picture: picture,
            result: result,
            user: user
        });
    })
    .catch(error => {
        console.error("Erreur upload :", error);
        return res.status(500).json({ error });
    });
};


exports.userInfo = (req, res, next) => {
    User.findOne({ _id: req.params.id })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllUsers = (req, res, next) => {
    User.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
};

exports.updateUser = (req, res, next) => {
    User.updateOne({ _id: req.params.id }, { bio: req.body.bio, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Votre profil a bien été modifié" }))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteUser = (req, res, next) => {
    User.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({ message: "Votre profil a bien été supprimé" }))
    .catch(error => res.status(400).json({ error }));
};