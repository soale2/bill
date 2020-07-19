const db=require('../config/database');
const express=require('express');
const router=express.Router();
router.post('/add',(req,res)=>{
    const {name,type,cost}=req.body;
    let sql='insert into product set ?';
    let body={name:name,type:type,cost:cost};
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
           req.flash('success_msg','Product created');
           res.redirect('/product');
        }
        else
        {
            req.flash('error',err);
            res.redirect('/product');
        }
    });
});
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    let sql='select * from product where id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            debugger;
           res.status(200).json({
               product:result[0]
           });
        }
        else
        {
           res.status(401).json({
               msg:'error occured',
               error:err
           });
        }
    });
});
router.post('/update',(req,res)=>{
    const {updateid,updatename,updatetype,updatecost}=req.body;
    let sql='update product set name=?, cost =?, type=? where id =?';
    let body=[updatename,updatecost,updatetype,updateid];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            req.flash('success_msg','Product updated');
           res.redirect('/product');
        }
        else
        {
            req.flash('error',err);
            res.redirect('/product');
        }
    });
});
router.delete('/delete/:id',(req,res)=>{
    let {id}=req.params;
    let sql='delete from product where id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
           res.status(200).json({
               msg:'product deleted'
           });
        }
        else
        {
          res.status(401).json({
              msg:'error occured',
              error:err
          });
        }
    });
});
module.exports=router;