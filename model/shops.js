const mongoose=require('mongoose');
//创建骨架
const studentsSchema = new mongoose.Schema({
    likes1:Array,
    likes2:Array,
    hot:Array
});
//创建模型 
/**
 * 第一个产生为数据库的集合，第二个为骨架
 * 
 */
const shop = mongoose.model('shops', studentsSchema);

module.exports=shop;