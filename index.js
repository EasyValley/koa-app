
const koa = require("koa");
const path = require("path");
const serve = require('koa-static');
const router = require('./src/router');
const logger = require("./src/logger");
const handlerError = require("./src/controller/handlerError");
const app = new koa();
const PORT = 3030;

//静态文件服务
app.use(serve(path.join(__dirname, "static")));
//日志模块
app.use(logger);
//错误处理
app.use(handlerError);
//路由模块
app.use(router.routes());
//监听请求
app.listen(PORT, "0.0.0.0", () => {
    console.log(`server is running at 0.0.0.0:${PORT}`);
});

