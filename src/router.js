const Router = require('koa-router');
const router = new Router();
const home = require('./controller/home');
const animals = require('./controller/animals');

router.get('/home', home);
router.get('/animals', animals)

module.exports = router;