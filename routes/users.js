var express = require('express');
const Users = require('../model/users');
var router = express.Router();
/*登录 */
router.post('/login', function (req, res, next) {
    Users.find({ username: req.body.username, password: req.body.password }, function (err, results) {
        if (results.length > 0) {
            res.json({
                status: 0,
                msg: "登录成功",
                token: results[0]._id
            });
        } else {
            res.json({
                status: 1,
                msg: "用户名或密码错误"
            });
        }
    });
});
//添加用户
router.post('/addUser', function (req, res, next) {
    Users.find({ username: req.body.username }, function (err, results) {
        if (err) throw err;
        if (results.length == 0) {
            var fluffy = new Users(req.body);
            fluffy.save(function (err, fluffy) {
                if (err) throw err;
                res.json({
                    status: 0,
                    msg: '添加成功'
                });
            });
        } else {
            res.json({
                status: 1,
                msg: '用户名重复'
            });
        }
    });
});
//用户详情
router.post('/findUser', function (req, res, next) {
    Users.find({ _id: req.body._id }, function (err, results) {
        if (results.length > 0) {
            res.json({
                status: 0,
                msg: "查找成功",
                results: results[0]
            });
        } else {
            res.json({
                status: 1,
                msg: "查找失败"
            });
        }
    });
});
/* 修改积分 */
router.post('/updateScore', function (req, res, next) {
    req.body.results.score+=req.body.cnt;
    delete req.body.cnt;
    Users.update({'_id':req.body._id},req.body.results, function (err, results) {
        if (err) throw err;
        res.json({
          status: 0,
          msg: '修改成功',
          score:req.body.results.score
        });
    });
});
module.exports = router;
