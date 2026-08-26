// Imports
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

const JWT_SIGN_SECRET = process.env.JWT_SIGN_SECRET;

// Exported functions

module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '24h'
        })
    },
    // parseAuthorization: function(authorization) {
    //     return (authorization != null) ? authorization.replace('Bearer ', '') : null;
    // },

parseAuthorization: function(authorization) {
    if (authorization == null) return null;

    const parts = authorization.trim().split(/\s+/);

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return null;
    }

    return parts[1];
},

    getUserId : function(authorization) {
        let userId = -1;
        const token = module.exports.parseAuthorization(authorization);
        if(token != null) {
            try {
                const jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                if(jwtToken != null)
                    userId = jwtToken.userId;
            } catch (err) { }
        }
        return userId;
    }
};