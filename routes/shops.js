var express = require('express');
const shop = require('../model/shops');
const listShops = require('../model/listShops');
var router = express.Router();
/* 获取所有的shop */
router.get('/getShops', function (req, res, next) {
    shop.find({}, function (err, results) {
        res.json({
            status: 0,
            results: results
        });
    });
});
/* 获取上拉刷新的列表 */
router.get('/getListShops', function (req, res, next) {
    let pageSize = req.query.pageSize;
    let pageCount = req.query.pageCount;    
    listShops.find({}).skip((pageSize-1)*pageCount).limit(+pageCount).exec ((err, results)=>{
        res.json({
            status: 0,
            results: results
        });
    });
});


module.exports = router;
