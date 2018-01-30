/**
 * 用户注册
 * @param {*请求响应上下文} ctx 
 * @param {*转让执行权} next 
 */
const registerUser = require('../service/login/registerUser');
const constObj = require('../util/constant');

async function register(ctx, next) {
    let req = ctx.request;
    let res = ctx.response;
    //callback
    let body = req.body;
    console.log(body);
    let result = await new Promise((resolve, reject) => {
        registerUser(body, (err, result) => {
            console.log('err:');
            console.log(err);
            console.log(result);
            if (err) {
                reject(err);
            } else {
                resolve({
                    status: constObj.success,
                    message: '注册成功'
                });
            }
        });
    });

    res.body = result;


}

module.exports = register;