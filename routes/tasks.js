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
/* 完成任务 */
router.post('/todoTasks', function (req, res, next) {
    req.body.src=1;
    tasks.update({'_id':req.body._id},req.body, function (err, results) {
        if (err) throw err;
        res.json({
          status: 0,
          msg: '修改成功'
        });
    });
});



module.exports = router;
