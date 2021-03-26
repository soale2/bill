const mysql=require('mysql');
const db=mysql.createConnection({
    user:'?',
    password:'?',
    host:'?s-mysql.services.clever-cloud.com',
    port:'3306',
    database:'?',
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
