const bcrypt = require('bcrypt');  // npm install --save bcrypt
const jwtUtils = require('../middleware/auth');
const User = require('../models/User');

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

exports.login = (req, res , next) => {

    // Params
    const user = {...req.body};

    if(user.email == null || user.password == null) {
        return res.status(400).json({ 'error': 'un des champs est vide !' });
    }

    User.findOne({ email: req.body.email })
    .then(function(userFound) {
        if(userFound) {

            bcrypt.compare(user.password, userFound.password, function(errBcrypt, resBcrypt) {
                if(resBcrypt) {
                    return res.status(200).json({
                        'userId': userFound.id,
                        'token': jwtUtils.generateTokenForUser(userFound)
                    })
                } else {
                    return res.status(400).json({ 'error': 'password invalide' });
                }
            });
        } else {
            return res.status(400).json({ "error": "l'utilisateur n'existe pas dans la base de donnée" });
        }

    })
    .catch(function(err) {
        return res.status(500).json({ "error": "impossible de vérifier l'utilisateur" });
    })
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