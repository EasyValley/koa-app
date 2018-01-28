function home(ctx) {
    const req = ctx.request;
    const res = ctx.response;
    res.body = {
        home: 'my home'
    };
}

module.exports = home;