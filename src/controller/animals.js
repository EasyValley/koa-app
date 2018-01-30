const querystring = require('querystring');

function animals(ctx) {
    const req = ctx.request;
    const res = ctx.response;
    //提取查询字符串
    let qsArr = req.url.split('?');
    let qs = '';
    if (qsArr.length > 1) {
        qs = qsArr[1];
    }
    //获取查询字符串
    let qsObj = querystring.parse(qs);
    let paramObj = {};
    if (qsObj['param']) {
        paramObj = JSON.parse(qsObj['param']);
    }
    console.log(paramObj);

    //引入了koa-bodyparser所以req.body才可用，koa本身没有处理req请求体的能力
    console.log(req.body);
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