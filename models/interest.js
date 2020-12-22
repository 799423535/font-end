const mongoose=require('mongoose');
//创建骨架
const studentsSchema = new mongoose.Schema({
    title:String,
    subtitle:String,
    count:Number,
    img:String
});
//创建模型 
/**
 * 第一个产生为数据库的集合，第二个为骨架
 * 
 */
const interest = mongoose.model('interest', studentsSchema);

module.exports=interest;