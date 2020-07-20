const express=require('express');
const product=require('./controllers/productController');
const bill=require('./controllers/billController');
const type=require('./controllers/typeController');
const transcation=require('./controllers/transactionsController');
const index=require('./controllers/index');
const db=require('./config/database');
const session=require('express-session');
const path=require('path');
const exphbs=require('express-handlebars');
const hbs=require('handlebars');
const {allowInsecurePrototypeAccess}=require('@handlebars/allow-prototype-access');
const flash=require('connect-flash');
const port=process.env.PORT||8080;
const app=express();
app.set('view engine','handlebars');
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'main',
handlebars:allowInsecurePrototypeAccess(hbs)}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}));
app.use(flash());
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
app.use('/',index);
app.use('/product',product);
app.use('/type',type);
app.use('/transactions',transcation);
app.use('/bill',bill);
app.listen(port,()=>{
    console.log(`server started on ${port}`);
});
