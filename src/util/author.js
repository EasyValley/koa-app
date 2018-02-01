async function author(ctx, next) {
    let req = ctx.request;
    let rpath = req.path;

    if (rpath == '/register' || rpath == '/login/author') {
        await next();
    } else {
        ctx.response.status = 403;
        ctx.response.body = {
            code: 403,
            message: '请重新登录'
        };
    }
}

module.exports = author;