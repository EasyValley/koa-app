/**
 * 捕获异常返回给前台
 * @param {*} ctx 
 * @param {*} next 
 */
const constObj = require('../util/constant');
async function handlerError(ctx, next) {
    const res = ctx.response;
    try {
        await next();
    } catch (err) {

        res.status = err.statusCode || err.status || 500;
        res.body = {
            status: constObj.fail,
            message: err.message
        };
    }
}

module.exports = handlerError;