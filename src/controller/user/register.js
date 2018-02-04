/**
 * 用户注册
 * @param {*请求响应上下文} ctx 
 * @param {*转让执行权} next 
 */
const registerUser = require('../../service/login/registerUser');
const tokenCreator = require('../../util/tokenCreator');

async function register(ctx, next) {
    let req = ctx.request;
    let res = ctx.response;
    //callback
    let body = req.body;
    try {
        let userArr = await registerUser(body);
        if ((userArr instanceof Array) && userArr[0]) {
            let user = userArr[0];
            let token = await tokenCreator.sign(user);
            res.body = {
                user,
                token
            };
        } else {
            res.status = 403;
            res.body = {
                code: 403,
                message: '注册失败'
            };
        }
    } catch (error) {
        res.status = 403;
        res.body = {
            code: 403,
            message: error.message
        };
    }



}

module.exports = register;