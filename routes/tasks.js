var express = require('express');
const shop = require('../model/shops');
const tasks = require('../model/tasks');
var router = express.Router();
/* 获取所有的shop */
router.get('/getTasks', function (req, res, next) {
    tasks.find({}, function (err, results) {
        let cnt =results.filter((item)=>{
              return item.src!=0;
        }).length;
        res.json({
            status: 0,
            results: results,
            cnt:cnt
        });
    });
});


module.exports = router;
