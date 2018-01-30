const Router = require('koa-router');
const router = new Router();
const home = require('./controller/home');
const animals = require('./controller/animals');
const register = require('./controller/register');
router.get('/home', home);
router.all('/animals', animals);
router.post('/register',register);


module.exports = router;