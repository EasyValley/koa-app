
const tokenCreator = require('../util/tokenCreator');

async function logout(ctx, next) {

    let token = await tokenCreator.sign(ctx.userMessage || {}, '-1h');

    ctx.response.body = {
        token
    };
}

module.exports = logout;