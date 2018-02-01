/**
 * 捕获异常返回给前台
 * @param {*} ctx 
 * @param {*} next 
 */
async function handlerError(ctx, next) {
    const res = ctx.response;
    try {
        await next();
    } catch (err) {
        
        res.status = err.statusCode || err.status || 500;
        let returnData = {
            code: res.status,
            message: err.message
        };
        ctx.logger.error(err);
        res.body = returnData;
    }
}

module.exports = handlerError;