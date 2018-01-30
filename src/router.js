const Router = require('koa-router');
const router = new Router();
const home = require('./controller/home');
const animals = require('./controller/animals');

router.get('/home', home);
router.all('/animals', animals);


module.exports = router;