const Router = require('koa-router');
const router = new Router();
const author = require('./util/author');
const login = require('./controller/login');
const logout = require('./controller/logout');
const register = require('./controller/register');
const getAllUsersHandler = require('./controller/getAllUsersHandler');

/**
 * 权限控制
 */
router.use(author);

/**
 * 登录，注销，注册，获取所有用户
 */
router.post('/login',login);
router.get('/logout',logout);
router.post('/register', register);
router.get('/users', getAllUsersHandler);

module.exports = router;