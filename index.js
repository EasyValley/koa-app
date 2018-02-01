
const koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const router = require('./src/router');
const handlerError = require('./src/controller/handlerError');
const app = new koa();
const env = require('./src/util/env');
const winstonLog = require('./src/util/winstonLog');

//添加日志文件
app.use(winstonLog());
//koa-logger日志模块
app.use(logger());
//错误处理
app.use(handlerError);
//请求体数据处理
app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
}));
//路由模块
app.use(router.routes());
app.use(router.allowedMethods());
//静态文件服务
app.use(serve(path.join(__dirname, 'static')));

//监听请求
app.listen(env.PORT, "0.0.0.0", () => {
    console.log(`server is running at 0.0.0.0:${env.PORT}`);
});

