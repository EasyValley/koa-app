
async function user(ctx, next) {
    console.log(ctx.params)
    ctx.body = {
        name: '张三用户',
    };
}

module.exports = user;