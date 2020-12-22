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
    var fluffy = new Users(req.body);
    fluffy.save(function (err, fluffy) {
        if (err) throw err;
        res.json({
            status: 0,
            msg: '添加成功'
        });
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
module.exports = router;
