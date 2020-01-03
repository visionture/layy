var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.sendfile('index.html')
});

router.post('/init',function(req,res,next){
    res.end('init success')
})

module.exports = router;
