var express = require('express');
const Tickets = require('../model/tickets');
var router = express.Router();
/* 获取所有的tickets */
router.get('/getTickets', function (req, res, next) {

    Tickets.find({}, function (err, results) {
        res.json({
            status: 0,
            results: results
        });
    });
});
// 查找某个ticket 
router.get('/findTicket', function (req, res, next) {
    Tickets.find({ _id: req.query._id }, function (err, results) {
        res.json({
            status: 0,
            results: results[0]
        });
    });
});


module.exports = router;
