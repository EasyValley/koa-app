
const tokenCreator = require('../../util/tokenCreator');
const findUser = require('../../service/login/findUser');

async function login(ctx, next) {
    let req = ctx.request;
    let res = ctx.response;

    try {
        let userArr = await findUser(req.body);
        if ((userArr instanceof Array) && userArr[0]) {
            let user = userArr[0];
            let token = await tokenCreator.sign(user);
            res.body = {
                user,
                token
            };
        } else {
            res.status = 401;
            res.body = {
                code: 401,
                message: '用户名或者密码错误！'
            };
        }
    } catch (error) {
        res.status = 401;
        res.body = {
            code: 401,
            message: '用户名或者密码错误！'
        };
    }






}

module.exports = login;