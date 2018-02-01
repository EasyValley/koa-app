
const tokenCreator = require('./tokenCreator');

async function author(ctx, next) {

    let req = ctx.request;
    let res = ctx.response;
    let rpath = req.path;
    let token = req.headers.authorization;

    if (rpath == '/register' || rpath == '/login') {
        await next();
    } else {

        try {
            const bare = await tokenCreator.verify(token);
            ctx.userMessage = bare;
            await next();
        } catch (error) {
            ctx.response.status = 403;
            ctx.response.body = {
                code: 403,
                message: '请重新登录'
            };
        }

    }
}

module.exports = author;