const mysql = require('mysql2');

process.env.NODE_ENV=process.env.NODE_ENV || 'dev';

let urlDB;

if(process.env.NODE_ENV=='dev'){
    urlDB={
        host:'localhost',
        user:'root',
        password:'',
        database:'dbactividad15'
    }
}else{
    urlDB={
        host:'85.10.205.173',
        user:'mariaortiz',
        password:'jimenamaria',
        database:'db_adsi'
    }

}


const connection=mysql.createConnection()

module.exports=connection;