var express = require('express');
var router = express.Router();
const { createUser, userLogin } = require('./controller/usersController');

/* GET users listing. */
router.get('/', function (req, res, next) { res.send('Hello from Black Sheep Router :D') });
router.post('/create-user', createUser);
router.post('/login', userLogin);

module.exports = router;
