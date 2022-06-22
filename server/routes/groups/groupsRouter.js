var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => { res.send("Hello From Connection Groups Router <3") });

module.exports = router;