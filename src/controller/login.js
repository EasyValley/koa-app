
const tokenCreator = require('../util/tokenCreator');

async function login(ctx, next) {
    const user = {
        name: '张三',
        email: 'zs@qq.com'
    };
    let token = await tokenCreator.sign(user, '30s');

    ctx.response.body = {
        token,
        s: '放火案ff'
    };
}

module.exports = login;