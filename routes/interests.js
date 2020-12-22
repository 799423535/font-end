var express = require('express');
const Introduces = require('../model/interests');
var router = express.Router();
/* 获取所有的interest */
router.get('/getinterests', function (req, res, next) {
    Introduces.find({}, function (err, results) {
        res.json({
            status: 0,
            results: results
        });
    });
});



module.exports = router;
