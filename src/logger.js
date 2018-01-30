const moment = require('moment');
moment.locale('zh-cn');

async function logger(ctx, next) {
    const req = ctx.request;
    const res = ctx.response;
    let now = new Date();
    let nowStr = moment(now).format('YYYY-MM-DD HH:mm:ss');
    console.log(`${nowStr}  ${req.method}  ${req.url}`);
    await next();
    let endTime = new Date();
    console.log(`响应用时:${endTime.getTime() - now.getTime()}`);
}

module.exports = logger;