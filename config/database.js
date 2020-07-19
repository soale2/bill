const mysql=require('mysql');
const db=mysql.createConnection({
    user:'um1pqho1f9nxnzt6',
    password:'dG7FyGtBRaP0tDYDDaou',
    host:'b8gryulv6zsavzfzyqrs-mysql.services.clever-cloud.com',
    port:'3306',
    database:'b8gryulv6zsavzfzyqrs',
    multipleStatements:true
});
db.connect((err)=>{
    if(!err)
    {
      console.log('database connected');
    }
    else
    {
      console.log('error occured');
    }
});
module.exports=db;