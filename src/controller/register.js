/**
 * 用户注册
 * @param {*请求响应上下文} ctx 
 * @param {*转让执行权} next 
 */
const registerUser = require('../service/login/registerUser');

async function register(ctx, next) {
    let req = ctx.request;
    let res = ctx.response;
    //callback
    let body = req.body;
    console.log(body);
    let result = await registerUser(body);
    res.body = result;


}

module.exports = register;