const mongoose=require('mongoose');
//创建骨架
const studentsSchema = new mongoose.Schema({
    head:String,
    name:String,
    main:String,
    rightimg1:String,
    rightimg2:String,
    title:String,
    flowers:Number,
    discuss:Number,
    details:Object,
    note:Array
});
//创建模型 
/**
 * 第一个产生为数据库的集合，第二个为骨架
 * 
 */
const introduce = mongoose.model('introduce', studentsSchema);

module.exports=introduce;