const db=require('../config/database');
const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    let sql='select * from product';
    db.query(sql,(err,result)=>{
        if(!err)
        {
             let sql='select * from bill';
             db.query(sql,(error,result1)=>{
                 if(!err)
                 {
                    res.render('index',{products:result,bills:result1});
                 }
                 else
                 {
                    res.render('index',{error:error}); 
                 }
             });
        }
        else
        {
           res.render('index',{error:err});
        }
    });
});
router.get('/product',(req,res)=>{
    let sql='select * from product';
    db.query(sql,(err,result)=>{
        if(!err)
        {
            
               let sql='select * from type';
               db.query(sql,(error,result1)=>{
                 if(!err)
                 {
                    res.render('product',{types:result1,products:result});
                 }
                 else
                 {
                     res.render('product',{error:error});
                 }
               });
            
        }
        else
        {
            res.render('product',{error:err});
        }
    });
});
router.get('/type',(req,res)=>{
    let sql='select * from type';
    db.query(sql,(err,result)=>{
        if(!err)
        {
            res.render('type',{types:result});
        }
        else
        {
              res.render('type',{error:err});
        }
    });
});
router.get('/transactions',(req,res)=>{
    let sql='select * from transactions';
    db.query(sql,(err,result)=>{
        if(!err)
        {
           res.render('transactions',{transactions:result});
        }
        else
        {
            res.render('transactions',{error:err});
        }
    });
});
module.exports=router;