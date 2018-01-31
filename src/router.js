const Router = require('koa-router');
const router = new Router();
const home = require('./controller/home');
const animals = require('./controller/animals');
const register = require('./controller/register');
const getAllUsersHandler = require('./controller/getAllUsersHandler');
router.get('/home', home);
router.all('/animals', animals);
router.post('/register', register);
router.get('/users', getAllUsersHandler);

module.exports = router;