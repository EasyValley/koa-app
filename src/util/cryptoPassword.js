/**
 * 
 * 加密
 */

const crypto = require('crypto');
const updateStr = '0da3d0b8af4935e2fdb204fffb3f9aa4afb6ec6e52e6f364f5a19b7a909756be';

function cryptoPassword(password) {
    let hash = crypto.createHmac('sha256', password).update(updateStr).digest('hex');
    return hash;
}

module.exports = cryptoPassword;