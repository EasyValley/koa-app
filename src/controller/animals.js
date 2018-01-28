function animals(ctx) {
    const req = ctx.request;
    const res = ctx.response;
    res.body = [
        {
            name: '狮子'
        },
        {
            name: '老虎'
        },
        {
            name: '猴子'
        }
    ];
}

module.exports = animals;