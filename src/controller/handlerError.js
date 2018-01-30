async function handlerError(ctx, next) {
    const res = ctx.response;
    try {
        await next();
    } catch (err) {
        
        res.status = err.statusCode || err.status || 500;
        res.body = {
            message: err.message
        };
    }
}

module.exports = handlerError;