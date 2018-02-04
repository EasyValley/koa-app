
const tokenCreator = require('./tokenCreator');

/**
 * 权限验证
 * @param {function} handler 
 */
function wrapAuthor(handler) {
    return async function author(ctx, next) {
        let req = ctx.request;
        let res = ctx.response;
        let token = req.headers.authorization;

        try {
            const bare = await tokenCreator.verify(token);
            ctx.userMessage = bare;
            await handler(ctx, next);
        } catch (error) {
            await permissionDeny(ctx, next);
        }
    }
}


module.exports = wrapAuthor;

async function permissionDeny(ctx, next) {
    ctx.response.status = 403;
    ctx.response.body = {
        code: 403,
        message: '请重新登录'
    };
}