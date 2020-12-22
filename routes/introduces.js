var express = require('express');
const Introduces = require('../model/introduces');
var router = express.Router();
/* 获取所有的introduce */
router.get('/getIntroduce', function (req, res, next) {
    Introduces.find({}, function (err, results) {
        res.json({
            status: 0,
            results: results
        });
    });
});
// 查找某个introduce 
router.get('/findIntroduce', function (req, res, next) {
    Introduces.find({ _id: req.query._id }, function (err, results) {
        res.json({
            status: 0,
            results: results[0]
        });
    });
});


module.exports = router;
