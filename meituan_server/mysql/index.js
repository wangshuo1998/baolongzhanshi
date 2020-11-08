var mysql = require("mysql");
var config = require("../config/default");

var pool = mysql.createPool({
    host:config.database.HOST,
    user:config.database.USERNAME,
    password:config.database.PASSWORD,
    database:config.database.DATABASE
});

class Mysql{
    constructor(){};
    //查找数据
    selectInfo(phone){
        return new Promise((resolve,reject)=>{
            pool.getConnection(function(err,connection){
                let selectSql = "SELECT * from meituanuserinfo where phone=?;";
                let selectData = phone;
                connection.query(selectSql,selectData,function(err,results,fields){
                    if(err){
                        throw err;
                    };
                    resolve(results);
                    //断开连接
                    connection.release();
                })
            })
        })
    };
    //增加数据
    addInfo(data){
        return new Promise((resolve,reject)=>{
            pool.getConnection(function(err,connection){
                let addSql = "INSERT INTO meituanuserinfo(id,nickname,phone,password) values(?,?,?,?);";
                let addData = data;
                 connection.query(addSql,addData,function(err,results,fields){
                    if(err){
                        throw err;
                    };
                    resolve(results);
                    //断开连接
                    connection.release();
                })
            })
        })
    };
}

module.exports = new Mysql();