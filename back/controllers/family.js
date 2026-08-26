const Family = require('../models/Family');
const User = require('../models/User');
const jwtUtils = require('../middleware/auth');

exports.createFamily = async (req, res) => {
  try {
     console.log("=== CREATE FAMILY ===");
    console.log("Authorization reçu :", req.headers.authorization);
    const userId = jwtUtils.getUserId(req.headers.authorization);

    if (userId === -1) {
      return res.status(401).json({ error: 'Utilisateur non authentifié' });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Utilisateur introuvable' });
    }
console.log("Utilisateur :", user);
console.log("FamilyId :", user.familyId);
    if (user.familyId) {
      return res.status(400).json({
        error: 'Vous avez déjà une famille'
      });
    }

    if (!req.body.name || !req.body.name.trim()) {
      return res.status(400).json({
        error: 'Le nom de la famille est obligatoire'
      });
    }

    const family = new Family({
      name: req.body.name.trim(),
      createdBy: userId
    });

    const savedFamily = await family.save();

    user.familyId = savedFamily._id;
    await user.save();

    return res.status(201).json({
      message: 'Famille créée !',
      family: savedFamily
    });

  } catch (error) {
    console.error('Erreur création famille :', error);
    return res.status(500).json({ error });
  }
};



exports.getMyFamily = async (req, res) => {
  try {
    const userId = jwtUtils.getUserId(req.headers.authorization);

    if (userId === -1) {
      return res.status(401).json({
        error: 'Utilisateur non authentifié'
      });
    }

    const user = await User.findById(userId).populate('familyId');

    if (!user) {
      return res.status(404).json({
        error: 'Utilisateur introuvable'
      });
    }

    if (!user.familyId) {
      return res.status(404).json({
        error: 'Vous n’avez pas encore de famille'
      });
    }

    return res.status(200).json(user.familyId);

  } catch (error) {
    console.error('Erreur récupération famille :', error);

    return res.status(500).json({
      error: 'Erreur serveur'
    });
  }
};

exports.getFamilyMembers = async (req, res) => {
  try {
    const userId = jwtUtils.getUserId(req.headers.authorization);

    if (userId === -1) {
      return res.status(401).json({
        error: 'Utilisateur non authentifié'
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        error: 'Utilisateur introuvable'
      });
    }

    if (!user.familyId) {
      return res.status(404).json({
        error: 'Vous n’avez pas encore de famille'
      });
    }

    const members = await User.find({
      familyId: user.familyId
    }).select('-password');

    return res.status(200).json(members);

  } catch (error) {
    console.error('Erreur récupération membres :', error);

    return res.status(500).json({
      error: 'Erreur serveur'
    });
  }
};
exports.addMember = async (req, res) => {
  try {
    const userId = jwtUtils.getUserId(req.headers.authorization);

    if (userId === -1) {
      return res.status(401).json({
        error: 'Utilisateur non authentifié'
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        error: 'Utilisateur introuvable'
      });
    }

    if (!user.familyId) {
      return res.status(400).json({
        error: 'Vous n’avez pas de famille'
      });
    }

    const member = await User.findOne({
      email: req.body.email
    });

    if (!member) {
      return res.status(404).json({
        error: 'Utilisateur introuvable'
      });
    }

    if (member.familyId) {
      return res.status(400).json({
        error: 'Cet utilisateur appartient déjà à une famille'
      });
    }

    member.familyId = user.familyId;
    await member.save();

    return res.status(200).json({
      message: 'Membre ajouté !',
      member: {
        _id: member._id,
        email: member.email,
        pseudo: member.pseudo,
        picture: member.picture
      }
    });

  } catch (error) {
    console.error('Erreur ajout membre :', error);

    return res.status(500).json({
      error: 'Erreur serveur'
    });
  }
};