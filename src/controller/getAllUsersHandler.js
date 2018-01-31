
const getAllUsers = require('../service/login/getAllUsers');

async function getAllUsersHandler(ctx, next) {
    let result = await getAllUsers();
    ctx.response.body = result;
}

module.exports = getAllUsersHandler;