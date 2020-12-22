const mongoose = require('mongoose');
//创建骨架
const studentsSchema = new mongoose.Schema({
    username: String,
    password: String,
    img: String,
    attention: Number,
    fans: Number,
    jifen: Number,
    details: Array
});
//创建模型 
/**
 * 第一个产生为数据库的集合，第二个为骨架
 * 
 */
const tickets = mongoose.model('tickets', studentsSchema);

module.exports = tickets;