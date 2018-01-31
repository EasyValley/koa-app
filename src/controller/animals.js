const qs = require('../util/getMethodQuerystring');
function animals(ctx) {
    const req = ctx.request;
    const res = ctx.response;
    //提取查询字符串
    res.body = [
        {
            name:'hozi'
        }
    ];
    
}

module.exports = animals;