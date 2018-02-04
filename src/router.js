const Router = require('koa-router');
const router = new Router();
const wrapAuthor = require('./util/wrapAuthor');
const login = require('./controller/user/login');
const register = require('./controller/user/register');
const user = require('./controller/user/user');
const getAllUsersHandler = require('./controller/getAllUsersHandler');

/**
 * 登录，注销，注册，获取所有用户只有/login和/register不用携带token
 */
router.post('/login', login);
router.post('/register', register);
router.all('/user', wrapAuthor(user));
router.get('/users', wrapAuthor(getAllUsersHandler));

module.exports = router;