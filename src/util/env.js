const path = require('path');

const config = {
    PORT: 3030,//服务器启动端口
    LOG_FILE_PATH: path.join(__dirname, '../log/info.log'),//日志文件
};

module.exports = config;