var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : "http://150.158.7.205",
  user            : 'vue03',
  password        : 'root',
  database        : 'vue03'
});
module.exports=pool;