
const tokenCreator = require('../util/tokenCreator');

async function login(ctx, next) {
    const user = {
        name: '张三',
        email: 'zs@qq.com'
    };
    let token = await tokenCreator.sign(user, '1h');

    ctx.response.body = {
        token
    };
}

module.exports = login;