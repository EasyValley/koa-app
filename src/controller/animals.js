const qs = require('../util/getMethodQuerystring');
function animals(ctx) {
    const req = ctx.request;
    const res = ctx.response;
    //提取查询字符串
    console.log('优秀');
    console.log(qs(req.url));
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