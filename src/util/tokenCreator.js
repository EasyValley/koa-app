
const jwt = require('jsonwebtoken');
const SECRET = 'mySecretHelloKey';

const tokenCreator = {
    /**
     * 
     * @param {Object} user 
     * @param {String} expiresIn '30s'--->30秒
     * 
     */
    async sign(user, expiresIn) {
        return new Promise((resolve, reject) => {
            let optional = {};
            if (expiresIn) {
                optional = {
                    expiresIn
                };
            }
            jwt.sign({ user }, SECRET, optional, (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
        });


    },
    /**
     * 
     * @param {string} token 
     * 
     */
    async verify(token) {
        return new Promise((resolve, reject) => {

            jwt.verify(token, SECRET, (err, decoded) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(decoded);
                }
            });
        });
    }
};

module.exports = tokenCreator;