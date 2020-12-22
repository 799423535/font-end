const mongoose=require('mongoose');
//创建骨架
const studentsSchema = new mongoose.Schema({
    title:String,
    interspace:String,
    timer:Number,
    distance:Number,
    price:String,
    img:String,
    details:Object
});
//创建模型 
/**
 * 第一个产生为数据库的集合，第二个为骨架
 * 
 */
const tickets = mongoose.model('tickets', studentsSchema);

module.exports=tickets;