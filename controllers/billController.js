const db=require('../config/database');
const express=require('express');
const router=express.Router();
router.post('/add',(req,res)=>{
    debugger;
    const {name,quantity,cost}=req.body;
    let price=cost * quantity;
    let body={productname:name,quantity:quantity,cost:cost,price:price};
    let sql='insert into bill set ?';
   
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            req.flash('success_msg','bill updated');
            res.redirect('/');
            // res.status(200).json({
            //     product:result[0],
            // });
        }
        else
        {
            req.flash('error',err);
            res.redirect('/');
            // res.status(401).json({
            //     msg:'error occured',
            //     error:err
            // });
        }
    });
});
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const {quantity,cost}=req.body;
    let price=quantity*cost;
    let sql='update bill set quantity=? price=? where id=? ';
    let body=[quantity,price,id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            req.flash('success_msg','bill updated');
            res.redirect('/');
        }
        else
        {
           req.flash('error',err);
           res.redirect('/');
        }
    });
});
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    let sql='select * from bill where id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
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
router.get('/getprice/:id',(req,res)=>{
    const {id}=req.params;
    let sql='select cost from product where id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
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
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    let sql='delete from bill where id=?';
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
router.post('/checkout',(req,res)=>{
    let sql='call CheckOut()';
    let body=[];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            req.flash('success_msg','CheckedOut Successfully');
            res.redirect('/');
        }
        else
        {
            req.flash('error_msg','CheckedOut Failed');
            res.redirect('/');
        }
    });
});
module.exports=router;