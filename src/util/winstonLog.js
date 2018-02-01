/**
 * 日志记录
 */
const winston = require('winston');
const env = require('./env');

function winstonLog() {
    return async function (ctx, next) {

        if (!ctx.logger) {
            ctx.logger = new (winston.Logger)({
                transports: [
                    new (winston.transports.Console)(),
                    new (winston.transports.File)({ filename: env.LOG_FILE_PATH })
                ]
            });
        }

        await next();
    };
}

module.exports = winstonLog;