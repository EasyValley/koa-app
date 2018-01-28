function logger(ctx, next) {
    const req = ctx.request;
    const res = ctx.response;
    let now = new Date();
    console.log(now.getTime());
    console.log(req.url);
    next();
}

module.exports = logger;