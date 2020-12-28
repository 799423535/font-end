const mongoose=require('mongoose');
//创建骨架
const studentsSchema = new mongoose.Schema({
   txt:String,
   count:Number,
   src:Number
});
//创建模型 
/**
 * 第一个产生为数据库的集合，第二个为骨架
 * 
 */
const tasks = mongoose.model('tasks', studentsSchema);

module.exports=tasks;